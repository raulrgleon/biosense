# Simulation Log

## SIM-006 — Filter / noise test — PASS

Configuration:
- VCC 3.3 V
- VREF 1.65 V
- sensor current 200 nA
- RF 1 MΩ
- injected 100 Hz disturbance

Results:
- CF=100 pF → fc≈1.59 kHz → 100 Hz ripple visible
- CF=100 nF → fc≈1.59 Hz → 100 Hz strongly attenuated
- DC output ≈1.85 V

## SIM-007 — ADC model — PASS

12-bit ADC, 3.3 V reference:
- 4096 levels
- LSB≈0.806 mV
- 1.85 V maps to about ADC 2296

Conclusion in the ideal model:
12-bit quantization is not the current dominant error source.

## SIM-009 — Glucose sweep — PASS

Provisional mapping only: **1 mg/dL = 1 nA**.

| mg/dL | nA | TIA V | ADC | Reconstructed mg/dL | Error |
|---:|---:|---:|---:|---:|---:|
| 50 | 50 | 1.700 | 2110 | 50.37 | +0.37 |
| 100 | 100 | 1.750 | 2172 | 100.33 | +0.33 |
| 150 | 150 | 1.800 | 2234 | 150.29 | +0.29 |
| 200 | 200 | 1.850 | 2296 | 200.26 | +0.26 |
| 300 | 300 | 1.950 | 2420 | 300.18 | +0.18 |
| 400 | 400 | 2.050 | 2544 | 400.11 | +0.11 |

Temperature: 37 °C.

## SIM-010 — Three-channel firmware model — PASS

Channels:
- CH1 glucose
- CH2 oxygen
- CH3 temperature

Validated tests:
1. glucose 200 nA, O2 100 nA, 37 °C
2. glucose fixed while O2 changes 100→400 nA
3. O2 fixed while glucose changes 200→300 nA

Example test #3:
- Glucose 300 nA → 1.9500 V → ADC 2420 → recovered 300.18 nA → ~300.18 mg/dL
- O2 100 nA → 1.7500 V → ADC 2172 → recovered 100.33 nA → 100.33 sim
- temperature 37 °C
- signal quality GOOD
- temperature compensation OFF
- O2→glucose influence OFF

## SIM-011 — Dual electrochemical TIA — PASS

Shared VREF=1.65 V.

Glucose:
- 200 nA
- RF1=1 MΩ
- CF1=100 pF
- Vout≈1.850 V

O2:
- 100 nA → 1.750 V
- 400 nA → 2.050 V

Changing oxygen current did not alter the glucose channel in the ideal circuit model.

## Dynamic browser simulator baseline — PASS

Baseline:
- glucose 200 mg/dL
- O2 50 sim
- temperature 37 °C
- glucose noise 0
- O2 noise 0
- drift 0
- compensation coefficients 0
- 12-bit ADC

Observed:
- glucose TIA 1.850 V
- glucose ADC 2296
- estimated glucose ≈200.26 mg/dL
- O2 TIA 1.700 V
- O2 ADC 2110
- recovered O2 ≈50.37 sim
- temperature 37 °C
- stable channels over time

Status: baseline accepted as control for future stress tests.
