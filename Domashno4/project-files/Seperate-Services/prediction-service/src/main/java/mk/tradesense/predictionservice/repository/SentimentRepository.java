package mk.tradesense.predictionservice.repository;

import mk.tradesense.predictionservice.model.Sentiment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SentimentRepository extends JpaRepository<Sentiment, Integer> {
    Sentiment findByStockCode(String stockCode);
}
