# BioSense Simulator

## Purpose

Browser-based engineering simulator for the BioSense signal chain.

It is explicitly **not a medical model** and all current sensor sensitivities remain provisional until replaced by bench calibration.

## Current modeled blocks

- GlucoseSensorModel
- OxygenSensorModel
- TemperatureModel
- independent glucose/O2 TIAs
- independent low-pass states
- ADC CH1 glucose
- ADC CH2 oxygen
- ADC CH3 temperature
- BioSenseAlgorithm
- signal-quality checks
- engineering charts
- scenario engine
- calibration/sweep controls
- complete session capture
- STOP & ANALYZE
- raw CSV export
- summary CSV export
- JSON export
- standalone HTML report / PDF workflow
- transient/tracking metrics
- custom RF/CF input with units

## Reference baseline

- glucose: 200 mg/dL
- O2: 50 sim
- temperature: 37 °C
- glucose sensitivity: 1 nA/(mg/dL), provisional
- O2 sensitivity: 1 nA/sim-unit, provisional
- RF glucose: 1 MΩ
- RF oxygen: 1 MΩ
- VREF: 1.65 V
- ADC: 12 bit / 3.3 V
- zero noise/drift reference

Expected ideal values:
- glucose current 200 nA
- glucose TIA 1.850 V
- glucose ADC 2296
- estimated glucose ~200.26 mg/dL
- O2 current 50 nA
- O2 TIA 1.700 V
- O2 ADC 2110
- recovered O2 ~50.37 sim

## Session model

A session stores the complete run independently from the short rolling chart buffer.

```js
SimulationSession = {
  id,
  startTime,
  endTime,
  configuration,
  samples,
  metrics,
  status
}
```

On STOP:
- freeze the run
- retain all samples
- calculate full-session metrics
- calculate transient/tracking metrics
- display results
- enable exports

PAUSE preserves the session.

## Export status

Implemented workflow includes:
- RAW CSV
- SUMMARY CSV
- JSON
- standalone HTML report
- report/PDF flow
- EXPORT ALL

A previous report bug where null metrics rendered as garbage/control characters was corrected:
- display layer renders unavailable numeric values as `N/A`
- JSON keeps proper `null`
- no NaN/Infinity should be serialized

## Metrics

### Glucose

- mean actual
- mean estimated
- signed mean error
- MAE
- RMSE
- maximum absolute error
- min/max/std
- mean current
- mean TIA/filter voltage
- ADC min/max/mean
- saturation/clipping counts
- step/transient metrics
- moving/tracking sample counts
- tracking MAE/RMSE/max
- best lag
- lag-corrected RMSE

### Oxygen

- mean input/recovered
- current
- TIA/filter values
- ADC values
- saturation/clipping

### Temperature

- mean/min/max

## RF / CF configurability

The simulator supports preset and custom values with explicit units.

Current glucose engineering reference:
- RF = 1 MΩ
- provisional CF candidate = 470 nF
- RC ≈ 0.47 s
- fc ≈ 0.3386 Hz

This is not yet a deterministic optimum.

## Reproducibility gap

Historic noise/CF runs used random noise with different durations. They validate trends but should not be used to rank closely spaced CF values definitively.

Required change:
- deterministic seeded PRNG
- same config + same seed → identical output
- no provided seed → generate one and return it
- within a sweep, every candidate value must use the **same underlying noise realization**

## Planned API contract

The API must call the **same shared simulation engine** as the browser UI. Do not duplicate the simulation math.

Planned endpoints:

```text
GET  /api/v1/health
GET  /api/v1/info
GET  /api/v1/defaults
GET  /api/v1/scenarios
POST /api/v1/simulate
POST /api/v1/sweep
POST /api/v1/compare

GET  /openapi.json
API docs / Swagger
```

### API requirements

- Bearer authentication using `BIOSENSE_API_KEY`
- health and OpenAPI may remain public
- CORS configuration
- rate limiting
- structured JSON errors
- request-size / simulation limits
- deterministic `random_seed`
- explicit drift unit: `drift_na_per_min`
- `include_samples` default:
  - simulate: true
  - sweep: false
  - compare: false
- safe sweep-parameter allowlist
- no database required for v1
- Docker/Coolify deployment
- `.env.example`
- automated tests
- OpenAPI 3.x
- no change to existing UI formulas/defaults/null semantics

### Controlled sweep acceptance test

Recommended first deterministic sweep:
- scenario: Meal
- glucose noise: 10 nA
- drift: 0 nA/min
- RF: 1 MΩ
- CF values: 100, 220, 330, 390, 470, 560, 680, 820, 1000 nF
- one fixed seed for all candidates

Outputs to compare:
- global MAE/RMSE/max
- tracking MAE/RMSE/max
- best lag
- lag-corrected RMSE
- saturation/clipping
- signal quality

## Future drift sweep

After deterministic CF selection, hold CF fixed and evaluate explicit glucose drift values such as:

```text
0, 0.5, 1, 2, 5, 10 nA/min
```

The exact sweep should be run through the shared engine/API once seed reproducibility is available.
