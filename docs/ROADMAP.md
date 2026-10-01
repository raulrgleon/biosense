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
Status: **COMPLETE**

- [x] full SimulationSession storage
- [x] STOP & ANALYZE
- [x] raw CSV export
- [x] summary CSV export
- [x] JSON export
- [x] standalone HTML report
- [x] report/PDF workflow
- [x] EXPORT ALL
- [x] full-session metrics
- [x] transient/tracking metrics
- [x] null/N/A report rendering fix
- [x] baseline preserved

## Phase 3 — Dynamic stress testing and filter exploration
Status: **IN PROGRESS**

Completed exploratory work:
- [x] rapid step transient analysis
- [x] rising scenario
- [x] falling scenario
- [x] meal scenario
- [x] glucose noise 0 / 2 / 5 / 10 nA
- [x] broad CF exploration
- [x] near-unfiltered 1 nF extreme
- [x] slow-filter 1 µF extreme
- [x] 390 nF detailed run
- [x] 470 nF detailed run
- [x] 560 nF detailed run

Still required:
- [ ] deterministic seeded PRNG
- [ ] apples-to-apples CF sweep using one shared noise realization
- [ ] drift sweep
- [ ] TIA saturation tests
- [ ] ADC clipping tests
- [ ] oxygen noise tests
- [ ] temperature disturbance
- [ ] provisional O2 influence
- [ ] combined disturbance

Current provisional glucose filter candidate:
- RF = 1 MΩ
- CF = 470 nF
- RC ≈ 0.47 s
- fc ≈ 0.3386 Hz

Do **not** call this mathematically optimal until the deterministic sweep is complete.

## Phase 4 — Simulator API / reproducibility
Status: **SPECIFIED / IMPLEMENTATION IN PROGRESS**

- [ ] refactor/confirm one shared simulation engine for UI + API
- [ ] deterministic `random_seed`
- [ ] same noise realization across sweep candidates
- [ ] `GET /api/v1/health`
- [ ] `GET /api/v1/info`
- [ ] `GET /api/v1/defaults`
- [ ] `GET /api/v1/scenarios`
- [ ] `POST /api/v1/simulate`
- [ ] `POST /api/v1/sweep`
- [ ] `POST /api/v1/compare`
- [ ] OpenAPI 3.x
- [ ] Swagger/API docs
- [ ] bearer API key
- [ ] CORS
- [ ] rate limits
- [ ] explicit `drift_na_per_min`
- [ ] automated API tests
- [ ] Docker/Coolify deployment

## Phase 5 — Replace provisional sensor models with bench data
Status: **NOT STARTED**

### Glucose
- [ ] choose physical glucose electrode/sensor
- [ ] known-standard glucose calibration
- [ ] replace 1 nA/(mg/dL) placeholder
- [ ] characterize offset/noise/drift
- [ ] characterize time response
- [ ] characterize temperature dependence

### Tissue oxygen
- [ ] choose physical oxygen electrode/sensor
- [ ] define controlled known-O2 bench setup
- [ ] measure zero/offset current
- [ ] measure sensitivity
- [ ] determine linearity
- [ ] characterize noise
- [ ] characterize drift
- [ ] characterize temperature dependence
- [ ] characterize response time
- [ ] replace arbitrary sim units
- [ ] do not assign mmHg without physical calibration

### Temperature
- [ ] choose physical temperature sensor
- [ ] characterize tissue-facing thermal response
- [ ] measure electronics self-heating influence
- [ ] define calibration/offset strategy

### Cross-channel
- [ ] characterize cross-sensitivity
- [ ] evaluate O2 dependence of selected glucose chemistry
- [ ] only introduce compensation coefficients after measured data exists

## Phase 6 — Implant electronics architecture
Status: **CONCEPT**

Current candidate: ADuCM355-class MCU/AFE.

- [ ] verify dual electrochemical-channel requirements
- [ ] estimate active/idle power budget
- [ ] choose wireless-power / NFC interface
- [ ] define rectifier/regulator/storage
- [ ] define temperature interface
- [ ] define telemetry strategy
- [ ] define clipping/fault detection
- [ ] schematic-level simulation
- [ ] estimate PCB area / component height

Current boundary:
- implant has no rechargeable battery
- implant has no BLE
- BioBand has battery + BLE + storage

## Phase 7 — RF / BioBand coupling
Status: **NOT STARTED**

- [ ] choose operating frequency/protocol
- [ ] implant planar/slightly-curved coil geometry
- [ ] BioBand reader/power coil geometry
- [ ] alignment zone
- [ ] spacing sweep
- [ ] tilt sweep
- [ ] lateral displacement sweep
- [ ] tissue-equivalent loading
- [ ] enclosure loading
- [ ] resonant tuning
- [ ] rectifier/power-transfer estimate
- [ ] minimum power budget validation
- [ ] read/data reliability

Packaging constraint:
- [x] reject a closed metallic shell around the implant coil conceptually
- [ ] evaluate RF-transparent medical-grade enclosure materials
- [ ] evaluate PEEK / ceramic / validated polymer options
- [ ] define sensing windows and feedthrough geometry

## Phase 8 — Physical bench prototype
Status: **FUTURE**

Bench-only first.

- [ ] AFE evaluation hardware
- [ ] glucose sensor test fixture
- [ ] oxygen test fixture
- [ ] temperature fixture
- [ ] known glucose standards
- [ ] controlled oxygen standards
- [ ] firmware port
- [ ] inductive-power prototype
- [ ] compare hardware logs against simulator
- [ ] update mathematical models from measured data

## Human-use boundary

No DIY implantation or human self-experimentation. Any implantable path requires professional biocompatibility, sterilization, preclinical, clinical and regulatory development.
