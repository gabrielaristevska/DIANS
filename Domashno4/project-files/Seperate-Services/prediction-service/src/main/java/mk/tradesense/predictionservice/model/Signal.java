package mk.tradesense.predictionservice.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "signals")
@IdClass(SignalId.class)
public class Signal {
    @Id
    @Column(name = "stock_code")
    private String stockCode;

    @Id
    @Column(name = "date")
    private Date date;

    private String signal;

    @Column(name = "last_price")
    private Double lastPrice; // Add lastPrice field
}
