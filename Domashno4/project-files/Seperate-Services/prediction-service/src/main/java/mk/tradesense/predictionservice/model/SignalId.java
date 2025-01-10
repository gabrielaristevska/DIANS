package mk.tradesense.predictionservice.model;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class SignalId implements Serializable {
    private String stockCode;
    private Date date;
}