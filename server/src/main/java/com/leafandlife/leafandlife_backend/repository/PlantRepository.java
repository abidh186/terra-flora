package com.leafandlife.leafandlife_backend.repository;

import com.leafandlife.leafandlife_backend.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository<Plant, Long> {
}