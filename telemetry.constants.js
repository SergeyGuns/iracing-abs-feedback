const TELEMETRY = {
    SessionTime:"SessionTime",  
    SessionTick:"SessionTick",  
   SessionNum:"SessionNum",  
   SessionState:"SessionState",  
   SessionUniqueID:"SessionUniqueID",  
   SessionFlags:"SessionFlags",  
   SessionTimeRemain:"SessionTimeRemain",  
   SessionLapsRemain:"SessionLapsRemain",  
   SessionLapsRemainEx:"SessionLapsRemainEx",  
   SessionTimeTotal:"SessionTimeTotal",  
   SessionLapsTotal:"SessionLapsTotal",  
   SessionJokerLapsRemain:"SessionJokerLapsRemain",  
   SessionOnJokerLap:"SessionOnJokerLap",  
   SessionTimeOfDay:"SessionTimeOfDay",  
   RadioTransmitCarIdx:"RadioTransmitCarIdx",  
   RadioTransmitRadioIdx:"RadioTransmitRadioIdx",  
   RadioTransmitFrequencyIdx:"RadioTransmitFrequencyIdx",  
   DisplayUnits:"DisplayUnits",  
   DriverMarker:"DriverMarker",  
   PushToPass:"PushToPass",  
   ManualBoost:"ManualBoost",  
   ManualNoBoost:"ManualNoBoost",  
   IsOnTrack:"IsOnTrack",  
   IsReplayPlaying:"IsReplayPlaying",  
   ReplayFrameNum:"ReplayFrameNum",  
   ReplayFrameNumEnd:"ReplayFrameNumEnd",  
   IsDiskLoggingEnabled:"IsDiskLoggingEnabled",  
   IsDiskLoggingActive:"IsDiskLoggingActive",  
   FrameRate:"FrameRate",  
   CpuUsageFG:"CpuUsageFG",  
   GpuUsage:"GpuUsage",  
   ChanAvgLatency:"ChanAvgLatency",  
   ChanLatency:"ChanLatency",  
   ChanQuality:"ChanQuality",  
   ChanPartnerQuality:"ChanPartnerQuality",  
   CpuUsageBG:"CpuUsageBG",  
   ChanClockSkew:"ChanClockSkew",  
   MemPageFaultSec:"MemPageFaultSec",  
   PlayerCarPosition:"PlayerCarPosition",  
   PlayerCarClassPosition:"PlayerCarClassPosition",  
   PlayerCarClass:"PlayerCarClass",  
   PlayerTrackSurface:"PlayerTrackSurface",  
   PlayerTrackSurfaceMaterial:"PlayerTrackSurfaceMaterial",  
   PlayerCarIdx:"PlayerCarIdx",  
   PlayerCarTeamIncidentCount:"PlayerCarTeamIncidentCount",  
   PlayerCarMyIncidentCount:"PlayerCarMyIncidentCount",  
   PlayerCarDriverIncidentCount:"PlayerCarDriverIncidentCount",  
   PlayerCarWeightPenalty:"PlayerCarWeightPenalty",  
   PlayerCarPowerAdjust:"PlayerCarPowerAdjust",  
   PlayerCarDryTireSetLimit:"PlayerCarDryTireSetLimit",  
   PlayerCarTowTime:"PlayerCarTowTime",  
   PlayerCarInPitStall:"PlayerCarInPitStall",  
   PlayerCarPitSvStatus:"PlayerCarPitSvStatus",  
   PlayerTireCompound:"PlayerTireCompound",  
   PlayerFastRepairsUsed:"PlayerFastRepairsUsed",  
   CarIdxLap:"CarIdxLap",  
   CarIdxLapCompleted:"CarIdxLapCompleted",  
   CarIdxLapDistPct:"CarIdxLapDistPct",  
   CarIdxTrackSurface:"CarIdxTrackSurface",  
   CarIdxTrackSurfaceMaterial:"CarIdxTrackSurfaceMaterial",  
   CarIdxOnPitRoad:"CarIdxOnPitRoad",  
   CarIdxPosition:"CarIdxPosition",  
   CarIdxClassPosition:"CarIdxClassPosition",  
   CarIdxClass:"CarIdxClass",  
   CarIdxF2Time:"CarIdxF2Time",  
   CarIdxEstTime:"CarIdxEstTime",  
   CarIdxLastLapTime:"CarIdxLastLapTime",  
   CarIdxBestLapTime:"CarIdxBestLapTime",  
   CarIdxBestLapNum:"CarIdxBestLapNum",  
   CarIdxTireCompound:"CarIdxTireCompound",  
   CarIdxQualTireCompound:"CarIdxQualTireCompound",  
   CarIdxQualTireCompoundLocked:"CarIdxQualTireCompoundLocked",  
   CarIdxFastRepairsUsed:"CarIdxFastRepairsUsed",  
   PaceMode:"PaceMode",  
   CarIdxPaceLine:"CarIdxPaceLine",  
   CarIdxPaceRow:"CarIdxPaceRow",  
   CarIdxPaceFlags:"CarIdxPaceFlags",  
   OnPitRoad:"OnPitRoad",  
   CarIdxSteer:"CarIdxSteer",  
   CarIdxRPM:"CarIdxRPM",  
   CarIdxGear:"CarIdxGear",  
   SteeringWheelAngle:"SteeringWheelAngle",  
   Throttle:"Throttle",  
   Brake:"Brake",  
   Clutch:"Clutch",  
   Gear:"Gear",  
   RPM:"RPM",  
   Lap:"Lap",  
   LapCompleted:"LapCompleted",  
   LapDist:"LapDist",  
   LapDistPct:"LapDistPct",  
   RaceLaps:"RaceLaps",  
   LapBestLap:"LapBestLap",  
   LapBestLapTime:"LapBestLapTime",  
   LapLastLapTime:"LapLastLapTime",  
   LapCurrentLapTime:"LapCurrentLapTime",  
   LapLasNLapSeq:"LapLasNLapSeq",  
   LapLastNLapTime:"LapLastNLapTime",  
   LapBestNLapLap:"LapBestNLapLap",  
   LapBestNLapTime:"LapBestNLapTime",  
   LapDeltaToBestLap:"LapDeltaToBestLap",  
   LapDeltaToBestLap_DD:"LapDeltaToBestLap_DD",  
   LapDeltaToBestLap_OK:"LapDeltaToBestLap_OK",  
   LapDeltaToOptimalLap:"LapDeltaToOptimalLap",  
   LapDeltaToOptimalLap_DD:"LapDeltaToOptimalLap_DD",  
   LapDeltaToOptimalLap_OK:"LapDeltaToOptimalLap_OK",  
   LapDeltaToSessionBestLap:"LapDeltaToSessionBestLap",  
   LapDeltaToSessionBestLap_DD:"LapDeltaToSessionBestLap_DD",  
   LapDeltaToSessionBestLap_OK:"LapDeltaToSessionBestLap_OK",  
   LapDeltaToSessionOptimalLap:"LapDeltaToSessionOptimalLap",  
   LapDeltaToSessionOptimalLap_DD:"LapDeltaToSessionOptimalLap_DD",  
   LapDeltaToSessionOptimalLap_OK:"LapDeltaToSessionOptimalLap_OK",  
   LapDeltaToSessionLastlLap:"LapDeltaToSessionLastlLap",  
   LapDeltaToSessionLastlLap_DD:"LapDeltaToSessionLastlLap_DD",  
   LapDeltaToSessionLastlLap_OK:"LapDeltaToSessionLastlLap_OK",  
   Speed:"Speed",  
   Yaw:"Yaw",  
   YawNorth:"YawNorth",  
   Pitch:"Pitch",  
   Roll:"Roll",  
   EnterExitReset:"EnterExitReset",  
   TrackTemp:"TrackTemp",  
   TrackTempCrew:"TrackTempCrew",  
   AirTemp:"AirTemp",  
   WeatherType:"WeatherType",  
   Skies:"Skies",  
   AirDensity:"AirDensity",  
   AirPressure:"AirPressure",  
   WindVel:"WindVel",  
   WindDir:"WindDir",  
   RelativeHumidity:"RelativeHumidity",  
   FogLevel:"FogLevel",  
   DCLapStatus:"DCLapStatus",  
   DCDriversSoFar:"DCDriversSoFar",  
   OkToReloadTextures:"OkToReloadTextures",  
   LoadNumTextures:"LoadNumTextures",  
   CarLeftRight:"CarLeftRight",  
   PitsOpen:"PitsOpen",  
   VidCapEnabled:"VidCapEnabled",  
   VidCapActive:"VidCapActive",  
   PitRepairLeft:"PitRepairLeft",  
   PitOptRepairLeft:"PitOptRepairLeft",  
   PitstopActive:"PitstopActive",  
   FastRepairUsed:"FastRepairUsed",  
   FastRepairAvailable:"FastRepairAvailable",  
   LFTiresUsed:"LFTiresUsed",  
   RFTiresUsed:"RFTiresUsed",  
   LRTiresUsed:"LRTiresUsed",  
   RRTiresUsed:"RRTiresUsed",  
   LeftTireSetsUsed:"LeftTireSetsUsed",  
   RightTireSetsUsed:"RightTireSetsUsed",  
   FrontTireSetsUsed:"FrontTireSetsUsed",  
   RearTireSetsUsed:"RearTireSetsUsed",  
   TireSetsUsed:"TireSetsUsed",  
   LFTiresAvailable:"LFTiresAvailable",  
   RFTiresAvailable:"RFTiresAvailable",  
   LRTiresAvailable:"LRTiresAvailable",  
   RRTiresAvailable:"RRTiresAvailable",  
   LeftTireSetsAvailable:"LeftTireSetsAvailable",  
   RightTireSetsAvailable:"RightTireSetsAvailable",  
   FrontTireSetsAvailable:"FrontTireSetsAvailable",  
   RearTireSetsAvailable:"RearTireSetsAvailable",  
   TireSetsAvailable:"TireSetsAvailable",  
   CamCarIdx:"CamCarIdx",  
   CamCameraNumber:"CamCameraNumber",  
   CamGroupNumber:"CamGroupNumber",  
   CamCameraState:"CamCameraState",  
   IsOnTrackCar:"IsOnTrackCar",  
   IsInGarage:"IsInGarage",  
   SteeringWheelPctTorque:"SteeringWheelPctTorque",  
   SteeringWheelPctTorqueSign:"SteeringWheelPctTorqueSign",  
   SteeringWheelPctTorqueSignStops:"SteeringWheelPctTorqueSignStops",  
   SteeringWheelPctDamper:"SteeringWheelPctDamper",  
   SteeringWheelAngleMax:"SteeringWheelAngleMax",  
   SteeringWheelLimiter:"SteeringWheelLimiter",  
   ShiftIndicatorPct:"ShiftIndicatorPct",  
   ShiftPowerPct:"ShiftPowerPct",  
   ShiftGrindRPM:"ShiftGrindRPM",  
   ThrottleRaw:"ThrottleRaw",  
   BrakeRaw:"BrakeRaw",  
   HandbrakeRaw:"HandbrakeRaw",  
   SteeringWheelPeakForceNm:"SteeringWheelPeakForceNm",  
   SteeringWheelMaxForceNm:"SteeringWheelMaxForceNm",  
   SteeringWheelUseLinear:"SteeringWheelUseLinear",  
   BrakeABSactive:"BrakeABSactive",  
   EngineWarnings:"EngineWarnings",  
   FuelLevel:"FuelLevel",  
   FuelLevelPct:"FuelLevelPct",  
   PitSvFlags:"PitSvFlags",  
   PitSvLFP:"PitSvLFP",  
   PitSvRFP:"PitSvRFP",  
   PitSvLRP:"PitSvLRP",  
   PitSvRRP:"PitSvRRP",  
   PitSvFuel:"PitSvFuel",  
   PitSvTireCompound:"PitSvTireCompound",  
   CarIdxP2P_Status:"CarIdxP2P_Status",  
   CarIdxP2P_Count:"CarIdxP2P_Count",  
   ReplayPlaySpeed:"ReplayPlaySpeed",  
   ReplayPlaySlowMotion:"ReplayPlaySlowMotion",  
   ReplaySessionTime:"ReplaySessionTime",  
   ReplaySessionNum:"ReplaySessionNum",  
   TireLF_RumblePitch:"TireLF_RumblePitch",  
   TireRF_RumblePitch:"TireRF_RumblePitch",  
   TireLR_RumblePitch:"TireLR_RumblePitch",  
   TireRR_RumblePitch:"TireRR_RumblePitch",  
   SteeringWheelTorque_ST:"SteeringWheelTorque_ST",  
   SteeringWheelTorque:"SteeringWheelTorque",  
   VelocityZ_ST:"VelocityZ_ST",  
   VelocityY_ST:"VelocityY_ST",  
   VelocityX_ST:"VelocityX_ST",  
   VelocityZ:"VelocityZ",  
   VelocityY:"VelocityY",  
   VelocityX:"VelocityX",  
   YawRate_ST:"YawRate_ST",  
   PitchRate_ST:"PitchRate_ST",  
   RollRate_ST:"RollRate_ST",  
   YawRate:"YawRate",  
   PitchRate:"PitchRate",  
   RollRate:"RollRate",  
   VertAccel_ST:"VertAccel_ST",  
   LatAccel_ST:"LatAccel_ST",  
   LongAccel_ST:"LongAccel_ST",  
   VertAccel:"VertAccel",  
   LatAccel:"LatAccel",  
   LongAccel:"LongAccel",  
   dcStarter:"dcStarter",  
   dpRFTireChange:"dpRFTireChange",  
   dpLFTireChange:"dpLFTireChange",  
   dpRRTireChange:"dpRRTireChange",  
   dpLRTireChange:"dpLRTireChange",  
   dcTearOffVisor:"dcTearOffVisor",  
   dpFuelFill:"dpFuelFill",  
   dpFuelAddKg:"dpFuelAddKg",  
   dpFastRepair:"dpFastRepair",  
   dpLFTireColdPress:"dpLFTireColdPress",  
   dpRFTireColdPress:"dpRFTireColdPress",  
   dpLRTireColdPress:"dpLRTireColdPress",  
   dpRRTireColdPress:"dpRRTireColdPress",  
   WaterTemp:"WaterTemp",  
   WaterLevel:"WaterLevel",  
   FuelPress:"FuelPress",  
   FuelUsePerHour:"FuelUsePerHour",  
   OilTemp:"OilTemp",  
   OilPress:"OilPress",  
   OilLevel:"OilLevel",  
   Voltage:"Voltage",  
   ManifoldPress:"ManifoldPress",  
   RRcoldPressure:"RRcoldPressure",  
   RRtempCL:"RRtempCL",  
   RRtempCM:"RRtempCM",  
   RRtempCR:"RRtempCR",  
   RRwearL:"RRwearL",  
   RRwearM:"RRwearM",  
   RRwearR:"RRwearR",  
   LRcoldPressure:"LRcoldPressure",  
   LRtempCL:"LRtempCL",  
   LRtempCM:"LRtempCM",  
   LRtempCR:"LRtempCR",  
   LRwearL:"LRwearL",  
   LRwearM:"LRwearM",  
   LRwearR:"LRwearR",  
   RFcoldPressure:"RFcoldPressure",  
   RFtempCL:"RFtempCL",  
   RFtempCM:"RFtempCM",  
   RFtempCR:"RFtempCR",  
   RFwearL:"RFwearL",  
   RFwearM:"RFwearM",  
   RFwearR:"RFwearR",  
   LFcoldPressure:"LFcoldPressure",  
   LFtempCL:"LFtempCL",  
   LFtempCM:"LFtempCM",  
   LFtempCR:"LFtempCR",  
   LFwearL:"LFwearL",  
   LFwearM:"LFwearM",  
   LFwearR:"LFwearR",  
   RRshockDefl:"RRshockDefl",  
   RRshockDefl_ST:"RRshockDefl_ST",  
   RRshockVel:"RRshockVel",  
   RRshockVel_ST:"RRshockVel_ST",  
   LRshockDefl:"LRshockDefl",  
   LRshockDefl_ST:"LRshockDefl_ST",  
   LRshockVel:"LRshockVel",  
   LRshockVel_ST:"LRshockVel_ST",  
   RFshockDefl:"RFshockDefl",  
   RFshockDefl_ST:"RFshockDefl_ST",  
   RFshockVel:"RFshockVel",  
   RFshockVel_ST:"RFshockVel_ST",  
   LFshockDefl:"LFshockDefl",  
   LFshockDefl_ST:"LFshockDefl_ST",  
   LFshockVel:"LFshockVel",  
   LFshockVel_ST:"LFshockVel_ST",  
}

module.exports = {
    TELEMETRY
}