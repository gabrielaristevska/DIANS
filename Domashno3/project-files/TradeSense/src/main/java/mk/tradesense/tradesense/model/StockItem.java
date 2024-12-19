package mk.tradesense.tradesense.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "stock_items")
public class StockItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "stock_code", nullable = false)
    private String stockCode;

    @Column(nullable = false)
    private String date;

    private String lastPrice;
    private String maxPrice;
    private String minPrice;
    private String avgPrice;
    private String percentChange;
    private String quantity;
    private String turnoverBest;
    private String totalTurnover;


}
