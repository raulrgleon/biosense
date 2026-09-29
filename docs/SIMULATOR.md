# BioSense Simulator

## Purpose

Local browser-based engineering simulator for the end-to-end BioSense signal chain.

It is explicitly **not a medical model**.

## Current blocks

- GlucoseSensorModel
- OxygenSensorModel
- TemperatureModel
- independent glucose and O2 TIAs
- independent low-pass state
- ADC CH1 glucose
- ADC CH2 oxygen
- ADC CH3 temperature placeholder
- BioSenseAlgorithm
- signal-quality checks
- engineering charts
- calibration sweep
- four built-in experiments
- CSV export

## Reference baseline

- Glucose: 200 mg/dL
- O2: 50 sim
- Temperature: 37 °C
- glucose sensitivity: 1 nA/(mg/dL), provisional
- RF glucose: 1 MΩ
- RF oxygen: 1 MΩ
- CF glucose: 100 nF
- CF oxygen: 100 nF
- VREF: 1.65 V
- ADC: 12 bit / 3.3 V
- noise: 0
- drift: 0
- temperature coefficient: 0
- O2 influence coefficient: 0 / disabled

Expected:
- glucose current 200 nA
- glucose TIA 1.850 V
- glucose ADC 2296
- estimated glucose ~200.256 mg/dL
- O2 current 50 nA
- O2 TIA 1.700 V
- O2 ADC 2110
- recovered O2 ~50.37 sim

## Session export upgrade

Required after each simulation run.

### Session model

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

The complete session sample log must be separate from the short rolling chart buffer.

### STOP & ANALYZE

On stop:
- freeze the session
- retain every sample
- compute full-session metrics
- display Simulation Results
- enable export actions

PAUSE must not clear the session.
RESET should warn if unexported results exist.

### Exports

- RAW CSV — one row per sample
- SUMMARY CSV — configuration and metrics
- JSON — metadata + configuration + metrics + all samples
- standalone HTML report — metrics, warnings and charts if possible
- EXPORT ALL — generate all supported outputs

### Required metrics

Glucose:
- mean actual
- mean estimated
- mean error
- MAE
- RMSE
- maximum absolute error
- min/max/std
- mean raw/recovered current
- mean TIA/filter voltage
- ADC min/max/mean
- quantization error
- saturation/clipping counts

Oxygen:
- mean input/recovered
- current and TIA/filter means
- ADC min/max/mean
- saturation/clipping counts

Temperature:
- mean/min/max

### Validation

A 120 s run with dt=0.1 s should contain approximately 1201 samples depending on inclusive-endpoint implementation.

Raw CSV and JSON sample counts must match the stored session.

JSON must never contain NaN or Infinity.

The validated ideal baseline must remain unchanged after session/export code is added.
