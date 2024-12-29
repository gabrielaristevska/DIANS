package mk.tradesense.tradesense.controller;

import mk.tradesense.tradesense.model.Signal;
import mk.tradesense.tradesense.repository.SignalRepository;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;

@RestController
@RequestMapping("/api/predictions")
public class PredictionController {
    private final SignalRepository signalRepository;

    public PredictionController(SignalRepository signalRepository) {
        this.signalRepository = signalRepository;
    }

    @PostMapping("/technical-analysis")
    public String runTechnicalAnalysis(@RequestParam String stockCode) {
        // Retrieve the Python path from environment variables
        String pythonPath = System.getenv("PYTHON_PATH");
        if (pythonPath == null) {
            throw new IllegalStateException("PYTHON_PATH environment variable is not set");
        }

        try {
            Process process = new ProcessBuilder(pythonPath, "src/main/java/mk/tradesense/tradesense/scripts/technical.py", stockCode).start();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            StringBuilder output = new StringBuilder();
            String line;

            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }

            process.waitFor();

            return "Technical analysis completed: " + output.toString();

        } catch (Exception e) {
            e.printStackTrace();
            return "Error executing technical analysis: " + e.getMessage();
        }
    }

    @GetMapping("/signals")
    public List<Signal> getSignals(@RequestParam String stockCode) {
        return signalRepository.findSignalsByStockCode(stockCode);
    }
}
