# Architecture

## System

BioSense separates the implant-side sensing element from the external wearable reader.

```text
[Subcutaneous BioSense implant]
  ├─ glucose electrochemical sensor
  ├─ tissue-oxygen electrochemical sensor
  ├─ local temperature sensor
  ├─ selective sensing membrane / tissue interface
  ├─ electrochemical AFE / potentiostat / TIA
  ├─ ADC
  ├─ ultralow-power MCU
  ├─ rectifier / regulator / temporary energy storage as required
  └─ small planar or slightly curved inductive coil
             ⇅  wireless power + data
[BioBand]
  ├─ larger reader / power-transfer coil
  ├─ rechargeable battery
  ├─ MCU
  ├─ local storage
  ├─ BLE
  ├─ charging electronics
  └─ iPhone communication
             ⇅
[iPhone]
```

## Implant power / telemetry boundary

Current concept:

- **implant: no rechargeable battery**
- **implant: no BLE radio**
- **BioBand: battery + BLE + storage + larger reader coil**

The implant is passive or near-passive and operates when enough energy is coupled from the BioBand. A fully passive device cannot continue active sensing while completely unpowered.

The wireless link is intended to carry power and data between implant and BioBand. Exact protocol/frequency remains an RF workstream; 13.56 MHz/NFC-like operation has been considered but is not yet frozen.

## Packaging and RF-transparent enclosure

A closed conductive metal shell around the implant coil is not compatible with the current inductive-power concept because it can:

- shield the magnetic field
- generate eddy-current losses
- detune the resonant structure
- reduce coupling and available power

Therefore the current packaging direction uses a **non-conductive / RF-transparent outer region around the coil**.

Candidate material classes for later engineering evaluation:
- medical-grade PEEK
- medical ceramic / alumina in appropriate geometries
- other validated biocompatible polymers or encapsulants

Metal remains normal and necessary internally for:
- PCB copper
- sensor electrodes
- component terminations
- small local structures

The constraint is against a **closed conductive outer shell or plate in the primary coupling path**, not against all metal.

## Tissue / sensor interface

The electronics must remain protected from tissue while glucose and oxygen sensing regions need controlled analyte access.

Conceptual stack:

```text
interstitial fluid
   ↓
biocompatible / permselective membrane
   ↓
glucose and oxygen active electrode regions
   ↓
sealed feedthrough / sensor substrate
   ↓
protected electronics cavity
```

This membrane/interface is expected to influence:
- diffusion
- selectivity
- response time
- biofouling
- foreign-body response
- long-term sensitivity and drift

These are unresolved physical-development risks.

## Glucose channel

Current concept:
- GOx electrochemical sensing
- WE/RE/CE architecture
- potentiostat/TIA
- ADC
- MCU reconstruction

Ideal simulator relationship:

```text
VOUT = VREF + I_SENSOR × RF
```

With VREF=1.65 V and RF=1 MΩ:
- 100 nA → 1.75 V
- 200 nA → 1.85 V
- 500 nA → 2.15 V

Current glucose sensitivity is deliberately provisional:

```text
1 mg/dL = 1 nA
```

This is a simulator mapping, not a measured biological calibration.

## Oxygen channel

The tissue-oxygen channel is an **independent electrochemical measurement path**.

Conceptual relationship:

```text
I_O2 = S_O2 × P_O2 + I0
```

and after calibration:

```text
P_O2 = (I_O2 - I0) / S_O2
```

However, `S_O2` and `I0` are currently unknown physical parameters.

Current simulator behavior:
- separate sensor current
- separate TIA/filter state
- separate ADC channel
- provisional arbitrary simulation units
- provisional 1 sim unit = 1 nA relationship
- no physiological conversion
- not mmHg
- not SpO2

A physical oxygen sensor must receive its own bench calibration for:
- offset
- sensitivity
- linearity
- noise
- drift
- temperature dependence
- membrane/diffusion effects

## Temperature channel

Temperature is independent CH3 input.

Current simulator:
- default 37 °C
- compensation coefficient = 0
- no glucose correction while coefficient is zero

A digital sensor such as a TMP117-class device is one possible architecture, but the final part is not selected.

The physical challenge is not the conversion math; it is ensuring the sensor tracks **local tissue temperature** rather than electronics self-heating.

## Electrochemical MCU / AFE

Current candidate: **ADuCM355-class architecture**.

Why it is being evaluated:
- low-power Cortex-M-class MCU
- electrochemical AFE
- ADC
- dual potentiostat/TIA capability suitable for two independent electrochemical channels

Target mapping:
- electrochemical channel 1 → glucose
- electrochemical channel 2 → tissue oxygen
- auxiliary interface → temperature
- separate external circuit → wireless power / inductive telemetry

This remains a candidate architecture until power, channel, package and RF requirements are verified.

## Filtering

Feedback RC relationship:

```text
fc = 1 / (2π RF CF)
```

Validated examples with RF=1 MΩ:
- CF=100 pF → fc≈1.59 kHz
- CF=100 nF → fc≈1.59 Hz
- CF=470 nF → fc≈0.3386 Hz, RC≈0.47 s
- CF=560 nF → fc≈0.2842 Hz, RC≈0.56 s
- CF=1 µF → fc≈0.1592 Hz, RC≈1.0 s

Current provisional glucose-filter compromise: **470 nF**, pending deterministic seeded comparison.

## ADC

Current baseline:
- 12 bit
- 0–3.3 V
- 4096 levels
- ideal LSB ≈ 0.806 mV

With RF=1 MΩ:
- 1 nA → 1 mV ideally
- ADC quantization is not the current dominant error source in the idealized model

## RF / BioBand coupling workstream

Parameters still to characterize:
- implant coil geometry
- BioBand coil geometry
- resonance/tuning
- spacing
- tilt
- lateral displacement
- tissue-equivalent loading
- enclosure loading
- power-transfer efficiency
- rectifier/regulator efficiency
- minimum power required by sensing + compute + telemetry
- communication reliability

Candidate physical geometry:
- flattened rounded subcutaneous capsule
- planar or slightly curved implant coil close to an RF-transparent wall
- much larger BioBand reader/power coil positioned directly above it
- explicit alignment zone in the BioBand mechanical design
