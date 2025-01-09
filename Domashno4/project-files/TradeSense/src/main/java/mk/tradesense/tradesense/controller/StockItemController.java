package mk.tradesense.tradesense.controller;

import mk.tradesense.tradesense.model.StockItem;
import mk.tradesense.tradesense.repository.StockItemRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stock-items")
public class StockItemController {

    private final StockItemRepository stockItemRepository;
    
    public StockItemController(StockItemRepository stockItemRepository) {
        this.stockItemRepository = stockItemRepository;
    }

    @PostMapping
    public ResponseEntity<StockItem> createStockPrice(@RequestBody StockItem stockItem) {
        StockItem savedStockItem = stockItemRepository.save(stockItem);
        return ResponseEntity.ok(savedStockItem);
    }

    @GetMapping
    public ResponseEntity<List<StockItem>> getAllStockPrices() {
        List<StockItem> stockItems = stockItemRepository.findAll();
        return ResponseEntity.ok(stockItems);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StockItem> getStockPriceById(@PathVariable Long id) {
        return stockItemRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStockPrice(@PathVariable Long id) {
        if (stockItemRepository.existsById(id)) {
            stockItemRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/codes")
    public ResponseEntity<List<String>> getAllStockCodes() {
        List<String> stockCodes = stockItemRepository.findDistinctStockCodes();
        return ResponseEntity.ok(stockCodes);
    }
}
