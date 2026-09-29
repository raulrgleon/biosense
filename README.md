# BioSense / BioDot

Experimental biosensor R&D project focused on a small subcutaneous sensing module paired with an external BioBand reader.

> **SIMULATION / RESEARCH ONLY — NOT FOR MEDICAL USE**

## Current concept

BioSense currently models **three independent sensing channels**:

1. **Glucose** — electrochemical GOx concept with WE/RE/CE, potentiostat/TIA, ADC and MCU processing.
2. **Oxygen** — separate electrochemical channel with its own TIA/ADC path.
3. **Temperature** — independent channel used as an environmental/tissue input and later as a possible compensation variable.

```
Glucose sensor ─┐
O2 sensor ──────┼─> AFE / TIA ─> ADC ─> MCU / algorithm ─> NFC/RF ─> BioBand ─> BLE ─> iPhone
Temperature ────┘
```

The implant concept is a small rounded/capsule device with a compact planar or slightly curved inductive coil. The external BioBand carries the larger reader coil, battery, memory, BLE and communication logic.

## Validated simulation state

- **SIM-006 — PASS**: TIA filtering/noise experiment
- **SIM-007 — PASS**: 12-bit ADC quantization model
- **SIM-009 — PASS**: glucose sweep 50–400 mg/dL under provisional ideal mapping
- **SIM-010 — PASS**: three-channel firmware model: glucose + oxygen + temperature
- **SIM-011 — PASS**: two independent electrochemical TIA channels
- **Dynamic simulator baseline — PASS**: 200 mg/dL glucose, O2=50 sim, 37 °C, zero noise/drift

Reference baseline:

| Channel | Input | TIA | ADC | Recovered |
|---|---:|---:|---:|---:|
| Glucose | 200 nA | 1.850 V | 2296 | ~200.256 mg/dL |
| Oxygen | 50 nA sim | 1.700 V | 2110 | ~50.37 sim |
| Temperature | 37 °C | CH3 provisional | placeholder | 37 °C |

## Provisional assumptions

- Glucose mapping is currently **1 mg/dL = 1 nA** for simulation only.
- Oxygen uses **arbitrary simulation units**. It is not mmHg, SpO2 or a physiological calibration.
- Temperature compensation defaults to 0.
- O2 influence on glucose defaults to OFF / 0.
- Wokwi ADC behavior is mathematical quantization, not a physical ESP32 ADC imperfection model.
- Human implantation is outside the scope of these simulations and requires professional biocompatibility, sterilization, preclinical, clinical and regulatory work.

## Candidate implant electronics

Current candidate: **ADuCM355** as a possible implant-side MCU + electrochemical AFE platform.

Current intent:
- glucose channel on one electrochemical path
- oxygen channel on a second path
- temperature on a separate channel/interface
- NFC / inductive power and telemetry handled externally from the ADuCM355

ESP32 remains a prototyping/simulation platform, not the preferred implant target.

## Current analog defaults

- VCC: 3.3 V
- VREF: 1.65 V
- Glucose RF: 1 MΩ
- Oxygen RF: 1 MΩ
- Simulator CF default: 100 nF
- With RF=1 MΩ and CF=100 nF: fc ≈ 1.592 Hz, RC = 0.100 s
- ADC: 12-bit, 3.3 V unless otherwise selected

## Simulator

The browser simulator models:

```
sensor models
→ current
→ noise/drift
→ independent TIAs
→ low-pass filters
→ ADC CH1/CH2/CH3
→ reconstruction
→ BioSense algorithm
→ metrics/charts/export
```

The next simulator upgrade adds complete session capture and export:
- raw CSV
- summary CSV
- JSON
- standalone HTML report
- STOP & ANALYZE
- full-session metrics independent of the short chart buffer

## Next phase

After export/session handling is validated, run controlled stress testing one variable at a time:

1. low glucose/O2 noise
2. drift
3. high noise
4. saturation/clipping
5. temperature disturbance
6. provisional O2 influence
7. combined disturbance

See:
- [Architecture](docs/ARCHITECTURE.md)
- [Simulation log](docs/SIMULATIONS.md)
- [Simulator](docs/SIMULATOR.md)
- [Roadmap](docs/ROADMAP.md)
