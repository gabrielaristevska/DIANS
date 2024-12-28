import pandas as pd
from sqlalchemy import create_engine
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import re
import nltk
import os

nltk.download('punkt_tab')

db_details = {
    "dbname": os.getenv("DB_NAME"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "host": os.getenv("DB_HOST"),
    "port": os.getenv("DB_PORT")
}

engine = create_engine(
    f'postgresql://{db_details["user"]}:{db_details["password"]}@{db_details["host"]}:{db_details["port"]}/{db_details["dbname"]}'
)

analyzer = SentimentIntensityAnalyzer()


def clean_issuer(issuer):
    cleaned_issuer = re.sub(r'[^a-zA-Z0-9]', '', issuer).upper()
    return cleaned_issuer


def analyze_and_save_sentiment():
    query = 'SELECT "Issuer", "Symbol", "News_Content" FROM issuer_news'
    df = pd.read_sql(query, engine)

    if df.empty:
        print("No data found in issuer_news table.")
        return

    df = df.dropna(subset=["Issuer", "Symbol", "News_Content"])
    sentiment_data = []
    df['Cleaned_Issuer'] = df['Issuer'].apply(clean_issuer)

    for _, row in df.iterrows():
        issuer = row['Cleaned_Issuer']
        symbol = row['Symbol']
        news_content = row['News_Content']

        sentences = nltk.sent_tokenize(news_content)

        relevant_sentences = [sentence for sentence in sentences if issuer in sentence.replace(' ', '').upper()]

        if relevant_sentences:
            aggregated_text = " ".join(relevant_sentences)
            sentiment_score = analyzer.polarity_scores(aggregated_text)['compound']
            sentiment = 'Positive' if sentiment_score > 0.05 else 'Negative' if sentiment_score < -0.05 else 'Neutral'
            sentiment_data.append({'Symbol': symbol, 'Sentiment': sentiment})

    if sentiment_data:
        sentiment_df = pd.DataFrame(sentiment_data)
        existing_data = pd.read_sql('SELECT "Symbol" FROM sentiments', engine)
        existing_symbols = set(existing_data['Symbol'])
        sentiment_df = sentiment_df[~sentiment_df['Symbol'].isin(existing_symbols)]

        if not sentiment_df.empty:
            sentiment_df.to_sql('sentiments', engine, if_exists='replace', index=False)
            print(f"Sentiment analysis results for symbols have been saved to the 'sentiments' table.")
        else:
            print("No new sentiment data to save.")
    else:
        print("No relevant sentences found for sentiment analysis.")


analyze_and_save_sentiment()