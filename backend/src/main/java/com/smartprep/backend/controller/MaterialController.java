package com.smartprep.backend.controller;

import com.smartprep.backend.model.Material;
import com.smartprep.backend.repository.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/materials")
@CrossOrigin(origins = "http://localhost:3000")
public class MaterialController {

    @Autowired
    private MaterialRepository materialRepository;

    // Save material
    @PostMapping("/add")
    public Material addMaterial(@RequestBody Material material) {
        return materialRepository.save(material);
    }

    // Get all materials
    @GetMapping("/all")
    public java.util.List<Material> getAllMaterials() {
        return materialRepository.findAll();
    }

}
