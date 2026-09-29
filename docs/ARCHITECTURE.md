# Architecture

## System

BioSense separates the implant-side sensing element from the wearable reader.

```
[Subcutaneous sensor capsule]
  ├─ Glucose electrochemical sensor
  ├─ Oxygen electrochemical sensor
  ├─ Temperature sensor
  ├─ AFE / potentiostat / TIA
  ├─ ADC
  ├─ ultralow-power MCU
  └─ inductive/NFC interface
             ⇅
[BioBand]
  ├─ larger reader coil
  ├─ battery
  ├─ storage
  ├─ BLE
  └─ phone communication
             ⇅
[iPhone]
```

## Glucose channel

Current model:
- GOx electrochemical concept
- WE/RE/CE electrochemical architecture
- TIA referenced to VREF
- current converted to voltage and then digitized

Ideal TIA relationship used in simulation:

```
VOUT = VREF + I_SENSOR × RF
```

With VREF=1.65 V and RF=1 MΩ:
- 100 nA → 1.75 V
- 200 nA → 1.85 V
- 500 nA → 2.15 V

Current glucose sensitivity is deliberately provisional: **1 nA per mg/dL**.

## Oxygen channel

Independent electrochemical channel:
- separate sensor current
- separate TIA state
- separate ADC channel
- provisional arbitrary simulation units

Changing oxygen must not change glucose while O2 influence is disabled.

No physiological O2 calibration is currently claimed.

## Temperature channel

Temperature is independent CH3 input.

Current simulator behavior:
- default 37 °C
- compensation coefficient = 0 by default
- no effect on glucose while coefficient is zero

The CH3 electrical conversion is still provisional/placeholder and should later be replaced by the selected physical temperature-sensor model.

## Filtering

Feedback RC filter:

```
fc = 1 / (2πRF CF)
```

Validated examples:
- RF=1 MΩ, CF=100 pF → fc≈1.59 kHz
- RF=1 MΩ, CF=100 nF → fc≈1.59 Hz

SIM-006 demonstrated that the 100 nF case strongly suppresses a 100 Hz perturbation while the 100 pF case allows visible ripple.

## ADC

Current baseline:
- 12 bit
- 0–3.3 V
- 4096 levels
- ideal LSB ≈ 0.806 mV

With RF=1 MΩ, 1 nA corresponds ideally to 1 mV. In the ideal model, ADC quantization is therefore not the current dominant error source.

## RF / power concept

The implant concept is passive or near-passive and powered/read by the BioBand through inductive coupling.

Important constraint:
- a fully passive implant cannot continuously sense while completely unpowered.

Parameters to characterize:
- coil geometry
- spacing
- tilt
- lateral displacement
- tissue-equivalent loading
- power-transfer efficiency
- read reliability

Candidate geometry:
- rounded/capsule body
- compact planar or slightly curved coil in/on capsule
- much larger planar reader coil in BioBand

RF simulation is a separate workstream from the electrical/firmware simulator.
