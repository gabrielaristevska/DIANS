package mk.tradesense.predictionservice.repository;

import mk.tradesense.predictionservice.model.Signal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SignalRepository extends CrudRepository<Signal, Integer> {
    List<Signal> findSignalsByStockCode(String stockCode);
}
