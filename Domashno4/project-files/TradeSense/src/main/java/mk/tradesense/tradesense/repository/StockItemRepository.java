package mk.tradesense.tradesense.repository;

import mk.tradesense.tradesense.model.StockItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockItemRepository extends JpaRepository<StockItem, Long> {

    @Query("SELECT DISTINCT s.stockCode FROM StockItem s")
    List<String> findDistinctStockCodes();
}