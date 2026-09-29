# Roadmap

## Phase 1 — Ideal signal-chain simulation
Status: **COMPLETE / BASELINE VALIDATED**

- [x] single glucose TIA
- [x] VREF validation
- [x] RC filter comparison
- [x] 12-bit ADC model
- [x] glucose sweep
- [x] three-channel firmware model
- [x] dual glucose/O2 TIA
- [x] browser simulator
- [x] stable dynamic baseline

## Phase 2 — Session capture and export
Status: **IN PROGRESS**

- [ ] full SimulationSession storage
- [ ] STOP & ANALYZE
- [ ] raw CSV export
- [ ] summary CSV export
- [ ] JSON export
- [ ] standalone HTML report
- [ ] EXPORT ALL
- [ ] full-session metrics
- [ ] baseline regression test

## Phase 3 — Controlled stress testing
Status: **NEXT**

Run one variable at a time against the stored baseline:

- [ ] low glucose noise
- [ ] low oxygen noise
- [ ] drift
- [ ] high noise
- [ ] glucose TIA saturation
- [ ] oxygen TIA saturation
- [ ] ADC clipping
- [ ] temperature disturbance
- [ ] provisional O2 influence
- [ ] combined disturbance

No physiological O2 conversion or medical thresholds should be introduced here.

## Phase 4 — Replace provisional models with bench data

- [ ] choose physical glucose electrode/sensor
- [ ] choose physical oxygen electrode/sensor
- [ ] choose temperature sensor
- [ ] collect known-standard bench calibration data
- [ ] replace 1 nA/(mg/dL) placeholder
- [ ] characterize offset/noise/drift
- [ ] characterize cross-sensitivity
- [ ] model sensor time response
- [ ] parameterize realistic AFE nonidealities

## Phase 5 — Implant electronics architecture

Current candidate: ADuCM355.

- [ ] confirm electrochemical channel requirements
- [ ] estimate power budget
- [ ] choose external NFC / power-harvesting IC
- [ ] define temperature interface
- [ ] define telemetry/storage strategy
- [ ] define clipping/fault detection
- [ ] schematic-level simulation

## Phase 6 — RF / BioBand coupling

- [ ] choose operating frequency / protocol
- [ ] capsule coil geometry
- [ ] BioBand reader coil geometry
- [ ] alignment tolerance
- [ ] spacing sweep
- [ ] tilt sweep
- [ ] lateral displacement sweep
- [ ] tissue-equivalent loading model
- [ ] power-transfer estimate
- [ ] read-range characterization

## Phase 7 — Physical prototype

Bench-only first.

- [ ] AFE evaluation hardware
- [ ] sensor test fixture
- [ ] known glucose standards
- [ ] oxygen test setup
- [ ] temperature characterization
- [ ] firmware port
- [ ] compare hardware logs against simulator

## Human-use boundary

No DIY implantation or human self-experimentation. Any implantable path requires professional biocompatibility, sterilization, preclinical, clinical and regulatory development.
