package mk.tradesense.predictionservice.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "sentiments")
public class Sentiment {
    @Id
    @Column(name = "symbol")
    private String stockCode;

    @Column(name = "sentiment")
    private String sentiment;
}
