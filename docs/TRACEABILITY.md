# BioSense Traceability Record

Last synchronized: 2026-09-30

Purpose: preserve a durable engineering record of assumptions, simulations, decisions, unresolved questions and next tests.

## TR-001 — System boundary

Decision:
- implant is subcutaneous
- current concept is passive or near-passive
- implant has no rechargeable battery
- implant has no BLE
- BioBand provides wireless power/readout and contains battery, BLE and storage

Status: CURRENT CONCEPT

## TR-002 — Sensor set

Current channels:
1. glucose electrochemical GOx concept
2. tissue oxygen electrochemical channel
3. local temperature channel

Status: CURRENT CONCEPT

## TR-003 — Glucose simulator sensitivity

Assumption:
- 1 mg/dL = 1 nA

Status: PROVISIONAL SIMULATION VALUE

Evidence:
- used by SIM-009 and current simulator runs

Replacement criterion:
- measured bench calibration using known glucose standards

## TR-004 — Oxygen simulator sensitivity

Assumption:
- 1 sim unit = 1 nA

Status: PROVISIONAL SIMULATION VALUE

Explicit exclusions:
- not mmHg
- not SpO2
- no physiological calibration claimed

Replacement criterion:
- physical oxygen-electrode calibration under known oxygen conditions

## TR-005 — Electrical baseline

- VREF = 1.65 V
- ADC = 12 bit
- ADC reference = 3.3 V
- glucose RF = 1 MΩ

Validated examples:
- 100 nA → 1.75 V
- 200 nA → 1.85 V
- 500 nA → 2.15 V
- 200 nA → ADC ~2296

Status: VALIDATED IN IDEAL SIMULATION

## TR-006 — Core simulation milestones

- SIM-006 filter/noise: PASS
- SIM-007 ADC: PASS
- SIM-009 glucose sweep: PASS
- SIM-010 three-channel model: PASS
- SIM-011 independent glucose/O2 TIA: PASS
- dynamic ideal baseline: PASS

Status: VALIDATED IN SIMULATION

## TR-007 — Session/export system

Implemented:
- SimulationSession
- STOP & ANALYZE
- full-session sample retention
- raw CSV
- summary CSV
- JSON
- standalone HTML report
- report/PDF flow
- EXPORT ALL
- full-session metrics
- transient/tracking metrics
- null→N/A display fix with JSON null preserved

Status: IMPLEMENTED / VALIDATED FUNCTIONALLY

## TR-008 — Dynamic tracking

Recorded results:
- rapid step scenario: 36 transitions; mean settle-to-±5 ~1.292 s
- rising: tracking MAE 0.2383; RMSE 0.2890; lag 0.1 s
- falling: tracking MAE 0.2906; RMSE 0.3545; lag 0.1 s
- Meal low/no-noise: tracking MAE 0.3704; RMSE 0.4741; lag 0.1 s

Status: VALIDATED AS SIMULATOR BEHAVIOR

## TR-009 — Noise trend

Meal / RF=1 MΩ / CF=100 nF exploratory runs:

- 0 nA: MAE ~0.37, RMSE ~0.47
- 2 nA: MAE ~0.987, RMSE ~1.237
- 5 nA: MAE ~2.328, RMSE ~2.918
- 10 nA: MAE ~4.920, RMSE ~6.151

Status: TREND VALIDATION

Limitation:
- stochastic runs; not identical noise realizations

## TR-010 — CF exploration

Exploratory Meal + 10 nA results:

| CF | Global MAE | Global RMSE | Tracking MAE | Tracking RMSE | Lag |
|---:|---:|---:|---:|---:|---:|
| 1 nF | 7.7429 | 9.6348 | 7.559 | 9.4168 | 0.0 s |
| 100 nF | 4.920 | 6.151 | 4.664 | 5.864 | 0.0 s |
| 220 nF | 3.310 | 4.150 | 3.202 | 4.039 | 0.2 s |
| 330 nF | 2.8672 | 3.6520 | 2.850 | 3.647 | 0.3 s |
| 390 nF | 2.8195 | 3.5126 | 2.977 | 3.716 | 0.4 s |
| 470 nF | 2.6344 | 3.2855 | 2.8163 | 3.4966 | 0.3 s |
| 560 nF | 2.5776 | 3.2991 | 3.0515 | 3.8741 | 0.7 s |
| 1 µF | 2.5380 | 3.5882 | 3.5431 | 4.7463 | 1.0 s |

Current engineering selection:
- 470 nF = provisional compromise

Status: PROVISIONAL

Reason not final:
- random noise and run durations differed

## TR-011 — Invalid run excluded

An accidental 390 µF configuration was run while targeting 390 nF.

Status: INVALID / EXCLUDED FROM COMPARISON

## TR-012 — Required deterministic validation

Required sweep:
- Meal
- 10 nA glucose noise
- 0 drift
- RF 1 MΩ
- CF = 100, 220, 330, 390, 470, 560, 680, 820, 1000 nF
- fixed random seed
- same underlying noise realization for every CF candidate

Status: PENDING

## TR-013 — API requirements

Planned API:
- /api/v1/health
- /api/v1/info
- /api/v1/defaults
- /api/v1/scenarios
- /api/v1/simulate
- /api/v1/sweep
- /api/v1/compare
- /openapi.json
- API docs

Critical requirements:
- shared UI/API engine
- deterministic random_seed
- same noise realization inside sweeps
- drift_na_per_min
- bearer BIOSENSE_API_KEY
- CORS/rate limits/errors/limits
- Docker/Coolify
- automated tests

Status: SPECIFIED / IMPLEMENTATION NOT YET VERIFIED HERE

## TR-014 — Oxygen workstream

What has been validated:
- independent second current/TIA/ADC channel
- oxygen changes do not alter glucose while coupling is disabled

What is NOT validated:
- real electrode sensitivity
- offset current
- physiological unit conversion
- temperature dependence
- drift
- long-term stability

Required physical model after calibration:

```text
I_O2 = S_O2 × P_O2 + I0
P_O2 = (I_O2 - I0) / S_O2
```

Status: ELECTRICAL MODEL VALIDATED; PHYSICAL CALIBRATION PENDING

## TR-015 — Temperature workstream

What is validated:
- independent third channel in simulator
- 37 °C reference handling

What is pending:
- physical sensor selection
- tissue-facing thermal response
- electronics self-heating
- real compensation coefficients

Status: MATHEMATICALLY STRAIGHTFORWARD; PHYSICAL VALIDATION PENDING

## TR-016 — Implant processor/AFE candidate

Candidate:
- ADuCM355-class electrochemical MCU/AFE

Planned mapping:
- channel 1 glucose
- channel 2 oxygen
- auxiliary temperature interface
- external wireless-power / inductive-telemetry circuit

Status: CANDIDATE, NOT FROZEN

## TR-017 — Packaging / enclosure

Decision:
- do not use a closed metallic outer shell around the inductive coil
- coil must face an RF-transparent region
- metal remains acceptable for electrodes, PCB copper and local internal structures

Candidate material classes:
- medical-grade PEEK
- ceramic/alumina
- validated biocompatible polymers/encapsulants

Status: CONCEPTUAL DESIGN CONSTRAINT

## TR-018 — Main unresolved biological risks

- foreign-body response
- fibrosis
- biofouling
- membrane stability
- GOx lifetime
- oxygen-sensor stability
- diffusion/time response
- cross-sensitivity
- sterilization compatibility

Status: OPEN

## TR-019 — Human-use boundary

No DIY implantation or self-experimentation.

Any human-use path requires professional:
- biocompatibility engineering
- sterilization validation
- preclinical testing
- clinical development
- regulatory review

Status: HARD PROJECT BOUNDARY
