package mk.tradesense.tradesense.repository;

import mk.tradesense.tradesense.model.Signal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SignalRepository extends CrudRepository<Signal, Integer> {
    List<Signal> findSignalsByStockCode(String stockCode);
}
