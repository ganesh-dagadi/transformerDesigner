const model = {
    createModel : function () {
        this.input = {
            cooling : {
                windingTemp : 0
            },
            general : {
                transformerType : "",
                power : 0.0, //in KVA
                frequency : 0.0,
                K : 0.0,
                windingMaterial : "",
                fluxDensity : 0.0 //in T
            },
            coreWdg : {
                am : 0.0,
                rho : 0.0,
                w_d : 0.0,
                limbPlate1 : 0.0,
                limbPlate2 : 0.0,
                gap_bobin : 0.0
            },
            winding : {
                lv : {
                    voltage : 0.0, //in volts
                    insulation : 0.0, //in mm
                    insulationBwLayers : 0.0, //mm
                    wireBare1 : 0.0,
                    wireBare2 : 0.0,
                    noParallelRA1 : 0,
                    noParallelRA2 : 0,
                    layers : 0,
                    endClearance : 0,
                    oilDucts1 : 0,
                    oilDucts2 : 0,
                    connectionType : "",
                    insulationType : ""
                },
                hv : {
                    voltage : 0.0, //in volts
                    insulation : 0.0, //in mm
                    insulationBwLayers : 0.0, //mm
                    wireBare1 : 0.0,
                    wireBare2 : 0.0,
                    noParallelRA1 : 0,
                    noParallelRA2 : 0,
                    layers : 0,
                    endClearance : 0,
                    oilDucts1 : 0,
                    oilDucts2 : 0,
                    connectionType : "",
                    insulationType : ""
                }
            }
        }
        this.output = {
            general : {
                v_t : 0.0,
                

            },
            winding : {
                lv : {
                    ratedVoltage : 0.0,
                    ratedCurrent : 0.0,
                    wireInsulated1 : 0.0,
                    wireInsulated2 : 0.0,
                    crossSection : 0.0,
                    turnPerLimb : 0,
                    windRadialDepth : 0.0,
                    currentDensity : 0.0,
                    turnLength : 0.0,
                    turnPerLayer : 0,
                    wireLength : 0.0,
                    windLength : 0.0,
                    Resistance : 0.0,
                    strayLoss : 0.0,
                    conductorWeight : 0.0,
                    wdg_lg_imp : 0.0,
                    limbLength : 0.0,
                    loadLoss : 0.0,
                    S_am2 : 0.0,
                    W_m2 : 0.0,
                    wdg_temp_rise : 0.0
                },
                hv : {
                    ratedVoltage : 0.0,
                    ratedCurrent : 0.0,
                    wireInsulated1 : 0.0,
                    wireInsulated2 : 0.0,
                    crossSection : 0.0,
                    turnPerLimb : 0,
                    windRadialDepth : 0.0,
                    currentDensity : 0.0,
                    turnLength : 0.0,
                    turnPerLayer : 0,
                    wireLength : 0.0,
                    windLength : 0.0,
                    Resistance : 0.0,
                    strayLoss : 0.0,
                    conductorWeight : 0.0,
                    wdg_lg_imp : 0.0,
                    limbLength : 0.0,
                    loadLoss : 0.0,
                    S_am2 : 0.0,
                    W_m2 : 0.0,
                    wdg_temp_rise : 0.0
                },
            },
            others : {
                B_six : 0.0, //to be changed later
                I12 : 0.0, //to be changed later
                J12 : 0.0 , //t0 be changed later
                R1 : 0.0 , //to be changed later
                LV_wdg : 0.0,
                HV_WDG : 0.0,
                L_ID : 0.0,
                perimeter1 : 0.0,
                R2 : 0.0, // to be changed later
                L_OD : 0.0 , 
                permiter2 : 0.0,
                H_ID : 0.0,
                mean_lg_lv : 0.0,
                H_OD : 0.0,
                C_dist : 0.0,
                Yoke_l : 0.0,
                core1 : 0.0, //to be changed later
            }
        }
    }
}

export default model