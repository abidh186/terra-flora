package com.leafandlife.leafandlife_backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.leafandlife.leafandlife_backend.repository.PlantRepository;
import com.leafandlife.leafandlife_backend.model.Plant;

@RestController
@RequestMapping("/plants")
public class PlantController {

    private final PlantRepository repository;

    public PlantController(PlantRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Plant> getAllPlants() {
        return repository.findAll();
    }

    @PostMapping
    public Plant addPlant(@RequestBody Plant plant) {
        return repository.save(plant);
    }
}
