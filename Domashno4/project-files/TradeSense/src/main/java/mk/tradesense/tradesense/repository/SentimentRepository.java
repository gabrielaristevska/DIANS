package mk.tradesense.tradesense.repository;

import mk.tradesense.tradesense.model.Sentiment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SentimentRepository extends JpaRepository<Sentiment, Integer> {
    Sentiment findByStockCode(String stockCode);
}
