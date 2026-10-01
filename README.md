# BioSense / BioDot

Experimental biosensor R&D project focused on a small **subcutaneous**, passive or near-passive sensing module paired with an external **BioBand** reader.

> **SIMULATION / RESEARCH ONLY — NOT FOR MEDICAL USE**
>
> No DIY implantation or human self-experimentation. Any implantable path requires professional biocompatibility, sterilization, preclinical, clinical and regulatory development.

## Current system concept

BioSense currently models three sensing channels:

1. **Glucose** — electrochemical GOx concept with WE/RE/CE, potentiostat/TIA, ADC and MCU processing.
2. **Tissue oxygen** — independent electrochemical channel with its own analog path.
3. **Temperature** — independent local tissue-temperature channel; later usable for compensation after physical calibration.

```text
Interstitial fluid
      │
      ├─ Glucose electrochemical sensor ─┐
      ├─ Tissue O2 electrochemical sensor├─> AFE/TIA ─> ADC ─> low-power MCU
      └─ Temperature sensor ──────────────┘                    │
                                                               │
                                             inductive/NFC power + data
                                                               │
                                                            BioBand
                                             battery + reader coil + BLE
                                                               │
                                                             iPhone
```

### Implant-side principles

- Small flattened/rounded subcutaneous capsule near the wrist.
- **No internal rechargeable battery** in the current concept.
- **No implant-side BLE** in the current concept.
- Powered/read by the BioBand through inductive/NFC-style coupling.
- Compact planar or slightly curved implant coil aligned with a larger BioBand coil.
- Electronics sealed from tissue; sensing windows/membranes provide controlled analyte access.
- The outer enclosure around the coil should be **RF-transparent / non-conductive**. A closed metallic shell is not compatible with the current inductive-power concept because of shielding, detuning and eddy-current loss.
- Candidate enclosure classes for future evaluation include medical-grade PEEK, ceramic and other biocompatible non-conductive encapsulation systems.

## Validated simulation state

### Core signal-chain tests

- **SIM-006 — PASS**: TIA filtering/noise experiment.
- **SIM-007 — PASS**: 12-bit ADC quantization model.
- **SIM-009 — PASS**: glucose sweep 50–400 mg/dL under provisional ideal mapping.
- **SIM-010 — PASS**: three-channel firmware model: glucose + oxygen + temperature.
- **SIM-011 — PASS**: two independent electrochemical TIA channels.
- **Dynamic simulator baseline — PASS**.

Reference baseline:

| Channel | Input | TIA | ADC | Recovered |
|---|---:|---:|---:|---:|
| Glucose | 200 nA | 1.850 V | 2296 | ~200.26 mg/dL |
| Oxygen | 50 nA sim | 1.700 V | 2110 | ~50.37 sim |
| Temperature | 37 °C | CH3 | provisional | 37 °C |

### Dynamic tracking / stress testing

The browser simulator now includes full-session capture/export and transient/tracking metrics.

Key validated observations:

- Rapid discrete-step scenario: 36 transitions, ~1.292 s mean settle-to-±5 mg/dL with RF=1 MΩ / CF=100 nF.
- Rising scenario: tracking MAE ~0.238 mg/dL; best lag ~0.1 s.
- Falling scenario: tracking MAE ~0.291 mg/dL; best lag ~0.1 s.
- Meal scenario: tracking MAE ~0.370 mg/dL; best lag ~0.1 s in the zero-noise reference run.
- Increasing glucose noise from 0 to 10 nA increases MAE/RMSE as expected.
- A 1 nF near-unfiltered case performed much worse under 10 nA noise.
- Larger CF values reduce noise but increase lag.

### Current provisional filter candidate

For glucose with RF=1 MΩ, **CF=470 nF** is the current provisional engineering compromise, not a final optimum:

- RC ≈ 0.47 s
- fc ≈ 0.3386 Hz
- Meal + 10 nA run:
  - global MAE ≈ 2.634 mg/dL
  - global RMSE ≈ 3.285 mg/dL
  - max absolute error ≈ 12.950 mg/dL
  - tracking MAE ≈ 2.816 mg/dL
  - tracking RMSE ≈ 3.497 mg/dL
  - best lag ≈ 0.3 s
  - no saturation/clipping
  - signal quality: GOOD

**Important:** historic CF runs used stochastic noise and different run durations. Small differences between CF values are therefore not controlled apples-to-apples comparisons. A deterministic seeded sweep is required before calling any CF value optimal.

## Provisional assumptions

- Glucose mapping is currently **1 mg/dL = 1 nA** for simulation only.
- Oxygen currently uses **arbitrary simulation units** with a provisional **1 sim unit = 1 nA** mapping.
- Oxygen is **not** currently calibrated in mmHg and is not SpO2.
- Temperature compensation defaults to 0.
- O2 influence on glucose defaults to OFF / 0.
- Current simulator coefficients are engineering placeholders until replaced by bench calibration data.

## Candidate implant electronics

Current candidate: **ADuCM355-class electrochemical MCU/AFE**.

Current intent:
- glucose on one electrochemical path
- oxygen on a second electrochemical path
- temperature on a separate interface/channel
- external wireless-power / NFC interface
- no implant-side rechargeable battery
- no implant-side BLE

ESP32 remains useful for prototyping/simulation, not the preferred implant target.

## Simulator / API direction

BioSense Simulator currently supports session capture, STOP & ANALYZE, raw/summary/JSON/HTML export, transient/tracking analysis and configurable RF/CF values.

The planned API must reuse the **same simulation engine** as the UI and add deterministic seeds so repeated runs are reproducible.

Planned endpoints:
- `GET /api/v1/health`
- `GET /api/v1/info`
- `GET /api/v1/defaults`
- `GET /api/v1/scenarios`
- `POST /api/v1/simulate`
- `POST /api/v1/sweep`
- `POST /api/v1/compare`
- `GET /openapi.json`
- API docs / Swagger

Critical sweep requirement: all CF values in a controlled sweep must use the **same underlying seeded noise realization**.

## Next engineering steps

1. Add deterministic PRNG support and run controlled CF sweeps.
2. Characterize glucose drift with CF held fixed.
3. Build the **oxygen calibration workstream**:
   - known oxygen conditions
   - current offset
   - sensitivity
   - linearity
   - noise
   - drift
   - temperature dependence
4. Select/characterize the physical temperature sensor.
5. Replace provisional glucose and oxygen coefficients with bench data.
6. Build the RF/power-transfer model for implant + BioBand coils.
7. Refine physical packaging with an RF-transparent enclosure and controlled sensing windows.

See:
- [Architecture](docs/ARCHITECTURE.md)
- [Simulation log](docs/SIMULATIONS.md)
- [Simulator](docs/SIMULATOR.md)
- [Roadmap](docs/ROADMAP.md)
- [Traceability](docs/TRACEABILITY.md)
