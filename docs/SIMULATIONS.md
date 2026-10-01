# Simulation Log

All glucose sensitivity values below remain **simulation assumptions unless explicitly marked as measured bench data**.

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

Conclusion: in the ideal model, 12-bit quantization is not the dominant error source.

## SIM-009 — Glucose sweep — PASS

Provisional mapping: **1 mg/dL = 1 nA**.

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

Validated:
1. glucose 200 nA, O2 100 nA, 37 °C
2. glucose fixed while O2 changes 100→400 nA
3. O2 fixed while glucose changes 200→300 nA

Example:
- glucose 300 nA → 1.9500 V → ADC 2420 → recovered 300.18 nA → ~300.18 mg/dL
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
- Vout≈1.850 V

O2:
- 100 nA → 1.750 V
- 400 nA → 2.050 V

Changing oxygen current did not alter glucose in the ideal independent-channel model.

---

# Dynamic browser simulator

## Baseline — PASS

Configuration:
- glucose 200 mg/dL
- O2 50 sim
- temperature 37 °C
- glucose noise 0
- O2 noise 0
- drift 0
- compensation coefficients 0
- 12-bit ADC

Observed:
- glucose current 200 nA
- glucose TIA 1.850 V
- glucose ADC 2296
- estimated glucose ≈200.26 mg/dL
- O2 current 50 nA
- O2 TIA 1.700 V
- O2 ADC 2110
- recovered O2 ≈50.37 sim
- stable channels

## Transient / tracking validation

### Rapid discrete-step scenario

With RF=1 MΩ and CF=100 nF:
- transitions: 36
- mean settle time to ±5 mg/dL: ~1.292 s
- rise behavior: ~0.320 s
- fall behavior: ~0.330 s
- max transient error: ~155 mg/dL
- steady-state MAE: ~0.173 mg/dL

Interpretation:
The large error at a step edge is expected filter lag, not ADC clipping or TIA saturation.

### Rising scenario

- step_count: 0
- moving samples: 399
- tracking MAE: 0.2383 mg/dL
- tracking RMSE: 0.2890 mg/dL
- max tracking error: 0.6355 mg/dL
- best lag: 0.1 s
- lag-corrected RMSE: 0.2284 mg/dL

### Falling scenario

- duration: 126.3 s
- samples: 1264
- step_count: 0
- moving samples: 1148
- tracking MAE: 0.2906 mg/dL
- tracking RMSE: 0.3545 mg/dL
- max tracking error: 0.7686 mg/dL
- best lag: 0.1 s
- lag-corrected RMSE: 0.2262 mg/dL

### Meal scenario — low/no-noise reference

- duration: 200.9 s
- samples: 2010
- step_count: 0
- moving samples: 956
- tracking MAE: 0.3704 mg/dL
- tracking RMSE: 0.4741 mg/dL
- max tracking error: 1.3278 mg/dL
- best lag: 0.1 s
- lag-corrected RMSE: 0.2681 mg/dL

## Noise robustness — Meal, RF=1 MΩ, CF=100 nF

These historic runs were stochastic and are useful for trend validation, not exact cross-run ranking.

| Glucose noise RMS | Global MAE | Global RMSE | Max abs error | Tracking MAE | Tracking RMSE | Max tracking |
|---:|---:|---:|---:|---:|---:|---:|
| 0 nA | ~0.37 | ~0.47 | ~1.33 | — | — | — |
| 2 nA | ~0.987 | ~1.237 | ~4.49 | ~1.013 | ~1.288 | ~4.49 |
| 5 nA | ~2.328 | ~2.918 | ~9.963 | ~2.393 | ~2.997 | ~9.573 |
| 10 nA | ~4.920 | ~6.151 | ~24.469 | ~4.664 | ~5.864 | ~19.513 |

No false step detection was observed in the documented noisy runs. Signal quality remained GOOD.

---

# CF exploration — Meal + 10 nA glucose noise

RF fixed at 1 MΩ.

**Important limitation:** these runs used random noise and different durations. They establish engineering trends, but they are not a deterministic apples-to-apples optimization.

| CF | fc | RC | Global MAE | Global RMSE | Tracking MAE | Tracking RMSE | Best lag |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 nF | 159.15 Hz | 0.001 s | 7.7429 | 9.6348 | 7.559 | 9.4168 | 0.0 s |
| 100 nF | 1.59 Hz | 0.10 s | 4.920 | 6.151 | 4.664 | 5.864 | 0.0 s |
| 220 nF | 0.7234 Hz | 0.22 s | 3.310 | 4.150 | 3.202 | 4.039 | 0.2 s |
| 330 nF | 0.4823 Hz | 0.33 s | 2.8672 | 3.6520 | 2.850 | 3.647 | 0.3 s |
| 390 nF | 0.4081 Hz | 0.39 s | 2.8195 | 3.5126 | 2.977 | 3.716 | 0.4 s |
| 470 nF | 0.3386 Hz | 0.47 s | 2.6344 | 3.2855 | 2.8163 | 3.4966 | 0.3 s |
| 560 nF | 0.2842 Hz | 0.56 s | 2.5776 | 3.2991 | 3.0515 | 3.8741 | 0.7 s |
| 1 µF | 0.1592 Hz | 1.00 s | 2.5380 | 3.5882 | 3.5431 | 4.7463 | 1.0 s |

### Detailed 390 nF run

- CF: 3.9e-7 F
- duration: 326.2 s
- samples: 3263
- signal quality: GOOD
- no saturation/clipping
- global MAE: 2.8195 mg/dL
- global RMSE: 3.5126 mg/dL
- max absolute error: 12.6007 mg/dL
- tracking moving samples: 956
- tracking MAE: 2.977 mg/dL
- tracking RMSE: 3.716 mg/dL
- max tracking error: 11.622 mg/dL
- best lag: 0.4 s

An accidental 390 µF run occurred earlier and is invalid for the intended 390 nF comparison.

### Detailed 470 nF run

- CF: 4.7e-7 F
- duration: 364.3 s
- samples: 3644
- signal quality: GOOD
- no saturation/clipping
- global mean actual: 163.0283 mg/dL
- global mean estimated: 163.1329 mg/dL
- signed mean error: +0.1046 mg/dL
- global MAE: 2.63445 mg/dL
- global RMSE: 3.28548 mg/dL
- max absolute error: 12.9502 mg/dL
- ADC range: 2163–2404
- tracking moving samples: 956
- tracking signed error: +0.3641 mg/dL
- tracking MAE: 2.8163 mg/dL
- tracking RMSE: 3.49664 mg/dL
- max tracking error: 12.9502 mg/dL
- best lag: 0.3 s
- lag-corrected RMSE: 3.20629 mg/dL

Current status: **provisional best compromise**, not a proven optimum.

### Detailed 560 nF run

Simulator 2.2.0:
- session ID: BS-20260929-183729-5378
- duration: 201.3 s
- samples: 2014
- glucose noise: 10 nA
- drift: 0
- RF: 1 MΩ
- CF: 5.6e-7 F
- RC: 0.56 s
- fc: 0.284205 Hz
- signal quality: GOOD
- no saturation/clipping
- global mean actual: 173.5725 mg/dL
- global mean estimated: 173.3889 mg/dL
- signed mean error: -0.1836 mg/dL
- global MAE: 2.57757 mg/dL
- global RMSE: 3.29907 mg/dL
- max absolute error: 12.38394 mg/dL
- ADC range: 2164–2403
- tracking moving samples: 956
- tracking signed error: -0.2858 mg/dL
- tracking MAE: 3.0515 mg/dL
- tracking RMSE: 3.8741 mg/dL
- max tracking error: 12.3839 mg/dL
- best lag: 0.7 s
- lag-corrected RMSE: 2.7177 mg/dL

Interpretation: smoother global MAE than 470 nF in this particular stochastic run, but worse tracking and lag.

### 1 µF run

- CF: 1e-6 F
- RC: 1.0 s
- fc: 0.15915 Hz
- duration: 208.7 s
- global MAE: 2.5380 mg/dL
- global RMSE: 3.5882 mg/dL
- max absolute error: 14.6682 mg/dL
- tracking MAE: 3.5431 mg/dL
- tracking RMSE: 4.7463 mg/dL
- best lag: 1.0 s
- lag-corrected RMSE: 2.1380 mg/dL

Interpretation: increased smoothing at the cost of additional tracking lag.

---

# Next controlled experiment requirement

The next valid CF comparison must use a deterministic PRNG seed.

Proposed controlled sweep:
- scenario: Meal
- glucose noise: 10 nA RMS
- glucose drift: 0
- RF: 1 MΩ
- CF: 100, 220, 330, 390, 470, 560, 680, 820, 1000 nF
- fixed seed, e.g. 12345
- same underlying noise realization for every CF value

Compare:
- global MAE
- global RMSE
- max absolute error
- tracking MAE
- tracking RMSE
- best lag
- lag-corrected RMSE
- saturation/clipping
- signal quality

Do not declare the optimum until this controlled sweep exists.

# Oxygen status

The oxygen path is electrically modeled but **not physically calibrated**.

Current provisional simulator mapping:
- 1 sim unit = 1 nA

Required future oxygen bench measurements:
- known oxygen conditions
- current offset `I0`
- sensitivity `S_O2`
- linearity
- noise
- drift
- temperature dependence
- response time
- membrane/diffusion effects

No mmHg or SpO2 conversion is currently claimed.
