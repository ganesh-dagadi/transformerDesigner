import constants from "./constants"

const calculator = {
    performCalculations : function(model){
      
        this.calculateRatedVoltage(model);
        this.calculate_v_t(model)
        this.calculateWireInsulated(model)
        this.calculateCrossSection(model)
        this.calculateRatedCurrent(model)
        this.calculateTurnPerLimb(model)
        this.calculateWindingRadialDepth(model)
        this.calculateCurrentDenstiy(model)
        this.calculateTurnPerLayer(model)
        this.calculateWindLength(model)
        this.calculateWdgLgImp(model)
        this.calculateLimbLength(model)
        this.calculateBSix(model)
        this.calculateI12(model)
        this.calculateJ12(model)
        this.calculateRone(model)
        this.calculateLvWdg(model)
        this.calculateHvWdg(model)
        this.calculateL_Id(model)
        this.calculateperimeter1(model)
        this.calculateRtwo(model)
        this.calculateL_Od(model)
        this.calculateperimeter2(model)
        this.calculateRthree(model)
        this.calculateRfour(model)
        this.calculatePerimeter3(model)
        this.calculatePerimeter4(model)
        this.calcuateH_Id(model)
        this.calculateMeanLgLv(model)
        this.calculateMeanLgHv(model)
        this.calculateH_Od(model)
        this.calculateL_Id_D(model)
        this.calculateL_Od_D(model)
        this.calcuateH_Id_D(model)
        this.calcuateH_Od_D(model)
        this.calculateTurnLength(model)
        this.calculateC_Dist(model)
        this.calculateYoke_L(model)
        this.calculateCore1(model)
        this.calculateWireLength(model)
        this.calculateResistance(model)
        this.calculateBImpV(model)
        this.calculateHImpV(model)
        this.calculateKrImpV(model)
        this.calculateStrayLoss(model)
        this.calculateConductorWeight(model)
       
        this.calculateLoadLoss(model)
        this.calculateS_am2(model)
        this.calculateW_m2(model)
        this.calculateWdg_Temp_Rise(model)
    },
    calculateRatedVoltage : function(model){
       if (model.input.winding.lv.connectionType == "STAR"){
            model.output.winding.lv.ratedVoltage = model.input.winding.lv.voltage / 1.732
       }
       else{
            model.output.winding.lv.ratedVoltage = model.input.winding.lv.voltage
       }
       if(model.input.winding.hv.connectionType == "STAR"){
            model.output.winding.hv.ratedVoltage = model.input.winding.hv.voltage / 1.732
       }
       else{
            model.output.winding.hv.ratedVoltage = model.input.winding.hv.voltage
       }
       return model
    },
    calculate_v_t : function(model){
        model.output.general.v_t = 1.01*Math.sqrt(model.input.general.power/3) * model.input.general.K / 100
        console.log("V_T is " , model.output.general.v_t)
        return model
    },
    calculateWireInsulated : function(model){
        if(model.input.winding.lv.insulationType == "FOIL"){
            model.output.winding.lv.wireInsulated1 = model.input.winding.lv.wireBare1
            model.output.winding.lv.wireInsulated2 = model.input.winding.lv.wireBare2
               
        }
        else{
            model.output.winding.lv.wireInsulated1 = model.input.winding.lv.wireBare1 + model.input.winding.lv.insulation
            model.output.winding.lv.wireInsulated2 = model.input.winding.lv.wireBare2 + model.input.winding.lv.insulation
        }
        if(model.input.winding.hv.insulationType == "FOIL"){
            model.output.winding.hv.wireInsulated1 = model.input.winding.hv.wireBare1
            model.output.winding.hv.wireInsulated2 = model.input.winding.hv.wireBare2
        }
        else{
            model.output.winding.hv.wireInsulated1 = model.input.winding.hv.wireBare1 + model.input.winding.hv.insulation
            model.output.winding.hv.wireInsulated2 = model.input.winding.hv.wireBare2 + model.input.winding.hv.insulation
        }
        return model
    },
    calculateCrossSection : function(model){
        let x;
        let y;
        let g;
        let h;
        if(model.input.winding.lv.wireBare2 <= 1.6){
            y = 0.216
        }
        else if(model.input.winding.lv.wireBare2 <= 2.24){
            y = 0.363
        }
        else if(model.input.winding.lv.wireBare2 <= 3.55){
            y = 0.55
        }
        else if(model.input.winding.lv.wireBare2 <= 5.6){
            y = 0.86
        }
        else{
            y = 1.34
        }
        if(model.input.winding.lv.wireBare1 == model.input.winding.lv.wireBare2){
            x = model.input.winding.lv.wireBare1*model.input.winding.lv.wireBare2 * 0.7854
        }
        else {
        if(model.input.winding.lv.insulationType == "FOIL"){
            x = model.input.winding.lv.wireBare1*model.input.winding.lv.wireBare2
        }
        else{
            x = model.input.winding.lv.wireBare1*model.input.winding.lv.wireBare2 - y
        }

        }
        if(model.input.winding.hv.wireBare2 <= 1.6){
            h = 0.216
        }
        else if(model.input.winding.hv.wireBare2 <= 2.24){
            h = 0.363
        }
        else if(model.input.winding.hv.wireBare2 <= 3.55){
            h = 0.55
        }
        else if(model.input.winding.hv.wireBare2 <= 5.6){
            h = 0.86
        }
        else{
            h = 1.34
        }
        if(model.input.winding.hv.wireBare1 == model.input.winding.hv.wireBare2){
            g = model.input.winding.hv.wireBare1*model.input.winding.hv.wireBare2*0.7854
        }
        else {
        if(model.input.winding.hv.insulationType == "FOIL"){
            g = model.input.winding.hv.wireBare1*model.input.winding.hv.wireBare2
        }
        else{
            g = model.input.winding.hv.wireBare1*model.input.winding.hv.wireBare2 - h
        }
        model.output.winding.lv.crossSection = model.input.winding.lv.noParallelRA1 * model.input.winding.lv.noParallelRA2 * x
        model.output.winding.hv.crossSection = model.input.winding.hv.noParallelRA1 * model.input.winding.hv.noParallelRA2 * g
        }
        return model
    },
    calculateRatedCurrent : function(model){
        if(model.input.winding.lv.connectionType == "STAR"){
            model.output.winding.lv.ratedCurrent = (model.input.general.power*1000)/(Math.sqrt(3)*model.input.winding.lv.voltage)
        }
        else{
            model.output.winding.lv.ratedCurrent = (model.input.general.power*1000)/(3*model.input.winding.lv.voltage)
        }
        if(model.input.winding.hv.connectionType =="STAR"){
            model.output.winding.hv.ratedCurrent = (model.input.general.power*1000)/(Math.sqrt(3)*model.input.winding.hv.voltage)
        }
        else{
            model.output.winding.hv.ratedCurrent = (model.input.general.power*1000)/(3*model.input.winding.hv.voltage)
        }
        return model
    },
    calculateTurnPerLimb: function(model){
        model.output.winding.lv.turnPerLimb = Math.ceil(model.output.winding.lv.ratedVoltage/model.output.general.v_t)
        model.output.winding.hv.turnPerLimb = Math.ceil(model.output.winding.hv.ratedVoltage/model.output.general.v_t)
        return model
    },
    calculateWindingRadialDepth : function(model){
        model.output.winding.lv.windRadialDepth = Math.round(((model.output.winding.lv.wireInsulated2 * 
        model.input.winding.lv.noParallelRA1 * model.input.winding.lv.layers + model.input.winding.lv.oilDucts1 * 
        model.input.winding.lv.oilDucts2 + model.input.winding.lv.insulationBwLayers * 
        (model.input.winding.lv.layers - 1)) * 1.1) / 5) * 5

        model.output.winding.hv.windRadialDepth = Math.round((((model.output.winding.hv.wireInsulated2 * 
            model.input.winding.hv.noParallelRA1 * model.input.winding.hv.layers + model.input.winding.hv.oilDucts1 * 
            model.input.winding.hv.oilDucts2 + model.input.winding.hv.insulationBwLayers * 
            (model.input.winding.hv.layers - 1)) * 1.1) / 5 ) * 5)
        // model.output.winding.hv.windRadialDepth = Math.round((((model.output.winding.hv.wireInsulated2 * 
        // model.input.winding.hv.noParallelRA2 * model.input.winding.hv.layers + model.input.winding.hv.oilDucts1 * 
        // model.input.winding.hv.oilDucts2 + model.input.winding.hv.insulationBwLayers * 
        // (model.input.winding.hv.layers - 1)) * 1.1) / 5 ) * 5)
        return model
    },
    calculateCurrentDenstiy : function(model){
        model.output.winding.lv.currentDensity = model.output.winding.lv.ratedCurrent / model.output.winding.lv.crossSection
        model.output.winding.hv.currentDensity = model.output.winding.hv.ratedCurrent / model.output.winding.hv.crossSection
        return model
    },
    calculateTurnPerLayer : function(model){
        model.output.winding.lv.turnPerLayer = Math.round(model.output.winding.lv.turnPerLimb / model.input.winding.lv.layers)
        model.output.winding.hv.turnPerLayer = Math.round(model.output.winding.hv.turnPerLimb / model.input.winding.hv.layers)
        return model
    },
    calculateWindLength : function(model){
        let x;
        let g;

        if(model.input.winding.lv.insulationType == "FOIL"){
            x = 0
        }
        else{
            x = 1
        }
        if(model.input.winding.hv.insulationType == "FOIL"){
            g = 0
        }
        else{
            g = 1
        }
        model.output.winding.lv.windLength = Math.round(model.output.winding.lv.wireInsulated1 * 
        model.input.winding.lv.noParallelRA2 * (model.output.winding.lv.turnPerLayer + x))
        model.output.winding.hv.windLength = Math.round(model.output.winding.hv.wireInsulated1 * 
        model.input.winding.hv.noParallelRA2 * (model.output.winding.hv.turnPerLayer + g))
        return model
    },
    
    calculateLimbLength : function(model){
        model.output.winding.lv.limbLength = model.output.winding.lv.windLength + model.input.winding.lv.endClearance
        model.output.winding.hv.limbLength = model.output.winding.hv.windLength + model.input.winding.hv.endClearance
        return model
    },
    calculateBSix : function(model){
        let x;
        model.output.others.netCrossSection = model.output.general.v_t/
        (4.44 * model.input.general.frequency * model.input.general.fluxDensity *0.0001 )
        if(model.input.coreWdg.steelgradeThick == "CRNO35"){
            x = 0.95
        }
        else{
            x = 0.97
        }
        model.output.others.stackingFactor = x
        model.output.others.B_six = Math.round((model.output.others.netCrossSection / model.output.others.stackingFactor)/
        (model.input.coreWdg.w_d * 0.1) * 10)
        return model
    },
    calculateI12 : function(model){
        model.output.others.I12 = model.input.coreWdg.w_d + model.input.coreWdg.limbPlate1
        return model
    },
    calculateJ12 : function(model){
        model.output.others.J12 = model.output.others.B_six + model.input.coreWdg.limbPlate2
        return model
    },
    calculateRone : function(model){
        model.output.others.R1 = model.input.coreWdg.gap_bobin / 2
        return model
    },
    calculateLvWdg : function(model){
        model.output.others.LV_wdg = 2 * model.output.winding.lv.windRadialDepth
        return model
    },
    calculateHvWdg : function(model){
        model.output.others.HV_WDG = 2 * model.output.winding.hv.windRadialDepth
        return model
    },
    calculateL_Id : function(model){
        model.output.others.L_ID = model.output.others.I12 + model.input.coreWdg.gap_bobin
        return model
    },
    calculateperimeter1 : function(model){
        model.output.others.perimeter1 = (2 * model.input.coreWdg.w_d + 2 * model.output.others.J12) + 
        2 * 3.1416 * model.output.others.R1
        return model
    },
    calculateRtwo : function(model){
        model.output.others.R2 = model.output.others.R1 + model.output.winding.lv.windRadialDepth
        return model
    },
    calculateL_Od : function(model){
        model.output.others.L_OD = model.output.others.L_ID + model.output.others.LV_wdg
        return model
    },
    calculateperimeter2 : function(model){
        model.output.others.perimeter2 = (2 * model.input.coreWdg.w_d + 2 * model.output.others.J12) + 
        2 * 3.1416 * model.output.others.R2
        return model
    },
    calculateRthree(model){
        model.output.others.R3 = model.output.others.R2 + model.input.coreWdg.rho/2;
    },
    calculateRfour(model){
        model.output.others.R4 = model.output.others.R3 + model.output.winding.hv.windRadialDepth
    },
    calculatePerimeter3(model){
        model.output.others.perimeter3 = (2 * model.input.coreWdg.w_d + 2 * model.output.others.J12) + 
        2 * 3.1416 * model.output.others.R3
    },
    calculatePerimeter4(model){
        model.output.others.perimeter4 = (2 * model.input.coreWdg.w_d + 2 * model.output.others.J12) + 
        2 * 3.1416 * model.output.others.R4
    },
    calcuateH_Id : function(model){
        model.output.others.H_ID = model.output.others.L_OD + model.input.coreWdg.rho
        return model
    },
    calculateMeanLgLv : function(model){
        model.output.others.mean_lg_lv = (model.output.others.perimeter1 + model.output.others.perimeter2)/2
        return model
    },
    calculateMeanLgHv : function(model){
        model.output.others.mean_lg_hv = (model.output.others.perimeter2 + model.output.others.perimeter3)/2
        return model
    },
    calculateH_Od : function(model){
        model.output.others.H_OD = model.output.others.H_ID + model.output.others.HV_WDG
        return model
    },
    calculateTurnLength : function(model){
        model.output.winding.lv.turnLength = model.output.others.mean_lg_lv / 1000
        model.output.winding.hv.turnLength = model.output.others.mean_lg_hv/1000
        return model
    },
    calculateC_Dist :  function(model){
        model.output.others.C_dist = model.output.others.H_OD +  model.input.coreWdg.am
        return model
    },
    calculateYoke_L : function(model){
        model.output.others.Yoke_l = 2 * model.output.others.C_dist + model.input.coreWdg.w_d
        return model
    },
    calculateCore1 : function(model){
        model.output.others.core1 =((( 2 * model.input.coreWdg.w_d + model.output.others.B_six ) *
        model.output.others.Yoke_l *2 ) + (model.input.coreWdg.w_d * model.output.others.B_six * 4) + 
        ((model.input.coreWdg.w_d + model.output.others.B_six) * 2 * model.output.winding.hv.limbLength * 3)) * 0.000001
        return model
    },
    calculateWireLength : function(model){
        model.output.winding.lv.wireLength = model.output.winding.lv.turnLength * model.output.winding.lv.turnPerLimb
        model.output.winding.hv.wireLength = model.output.winding.hv.turnLength * model.output.winding.hv.turnPerLimb
        return model
    },
    calculateResistance : function(model){
        let x;
        if(model.input.general.windingMaterial == "CU"){
            if(model.input.cooling.windingTemp == 90){
                x = 44.7
            }
            else{
                x = 42.76
            }
        }
        else if(model.input.general.windingMaterial == "AL"){
            if(model.input.cooling.windingTemp == 90){
                x = 28
            }
            else{
                x = 26.73
            }
        }
        model.output.winding.lv.Resistance =  model.output.winding.lv.wireLength / (model.output.winding.lv.crossSection * x)
        model.output.winding.hv.Resistance =  model.output.winding.hv.wireLength / (model.output.winding.hv.crossSection * x)
        return model
    },
    calculateHImpV : function(model){
        model.output.coreLoss.h_imp_v = (model.output.winding.lv.wdg_lg_imp + model.output.winding.hv.wdg_lg_imp)/2;
        console.log(model.output.winding.lv.wdg_lg_imp + model.output.winding.hv.wdg_lg_imp)
    },
    calculateBImpV : function(model){
        model.output.coreLoss.b_imp_v = model.output.winding.lv.windRadialDepth + model.input.coreWdg.rho/2 + model.output.winding.hv.windRadialDepth
    },
    calculateKrImpV : function(model){
        model.output.coreLoss.kr_imp_v = 1 - (1/((model.output.coreLoss.h_imp_v / model.output.coreLoss.b_imp_v) * 3.147))
    },
    calculateStrayLoss : function(model){
        // let x;
        // if(model.input.general.windingMaterial == "CU"){
        //     x = 0.9622
        // }
        // else{
        //     x = 0.7618
        // }
        // let y = (model.input.winding.lv.wireBare2 / 10) * Math.sqrt(((model.input.winding.lv.wireBare1 *
        //         (model.output.winding.lv.turnPerLayer + 1)) / model.output.winding.lv.windLength) *
        //         model.output.winding.lv.layers * x)
        // model.output.winding.lv.strayLoss = Math.pow(y , 4) * (Math.pow((model.output.winding.lv.layers  *
        // model.input.winding.lv.noParallelRA1) , 2/9)) * 100
        // let h = (model.input.winding.hv.wireBare2 / 10) * Math.sqrt(((model.input.winding.hv.wireBare1 *
        //         (model.output.winding.hv.turnPerLayer + 1)) / model.output.winding.hv.windLength) *
        //         model.output.winding.hv.layers * x)
        // model.output.winding.hv.strayLoss = (Math.pow(h ,4)) * (Math.pow((model.output.winding.hv.layers  *
        // model.input.winding.hv.noParallelRA1) , 2/9)) * 100

        
        let strayLossLV = Math.pow(
            (model.input.winding.lv.wireBare2 / 10) * Math.sqrt(((model.input.winding.lv.wireBare1 * (model.output.winding.lv.turnPerLayer + 1)) * model.output.coreLoss.kr_imp_v) / model.output.winding.lv.windLength) * (model.input.general.windingMaterial === "CU" ? 0.9622 : 0.7618),
            4
        ) * (Math.pow(model.input.winding.lv.layers * model.input.winding.lv.noParallelRA1 , 2)/ 9) * 100;
        model.output.winding.lv.strayLoss = strayLossLV;
        //  console.log((model.input.winding.lv.wireBare1 * (model.output.winding.lv.turnPerLayer + 1)));
        console.log(model.input.general.windingMaterial === "CU" ? 0.9622 : 0.7618);
        // console.log(model.output.coreLoss.kr_imp_v);
        // console.log( model.output.winding.lv.windLength);
        let strayLossHV = Math.pow(
            (model.input.winding.hv.wireBare2 / 10) * Math.sqrt(((model.input.winding.hv.wireBare2 * (model.output.winding.hv.turnPerLayer + 1)) * model.output.coreLoss.kr_imp_v) / model.output.winding.hv.windLength) * (model.input.general.windingMaterial === "CU" ? 0.9622 : 0.7618),
            4
        ) * (Math.pow(model.input.winding.hv.layers * model.input.winding.hv.noParallelRA1 , 2) / 9) * 100;
        model.output.winding.hv.strayLoss = strayLossHV;
        return model
    },
    calculateConductorWeight : function(model){
        let x;
        if(model.input.general.windingMaterial == "CU"){
            x = 8.89
        }
        else{
            x = 2.7
        }
        model.output.winding.lv.conductorWeight = model.output.winding.lv.wireLength * 
        model.output.winding.lv.crossSection * x * 3 / 1000 
        model.output.winding.hv.conductorWeight = model.output.winding.hv.wireLength * 
        model.output.winding.hv.crossSection * x * 3 / 1000        
        return model
    },
    calculateWdgLgImp : function(model){
        let x
        if(model.input.winding.lv.insulationType == "FOIL"){
            x = 0
        }
        else{
            x = model.input.winding.lv.wireBare1 * model.input.winding.lv.noParallelRA2
        }
        model.output.winding.lv.wdg_lg_imp = model.output.winding.lv.windLength - x
        let g
        if(model.input.winding.hv.insulationType == "FOIL"){
            g = 0
        }
        else{
            g = model.input.winding.hv.wireBare1 * model.input.winding.hv.noParallelRA2
        }
        model.output.winding.hv.wdg_lg_imp = model.output.winding.hv.windLength - g
        return model
    },
    calculateLoadLoss : function(model){
        model.output.winding.lv.loadLoss = (Math.pow(model.output.winding.lv.ratedCurrent,2)) *
        model.output.winding.lv.Resistance * 3 * (1 + model.output.winding.lv.strayLoss /100) 
        model.output.winding.hv.loadLoss = (Math.pow(model.output.winding.hv.ratedCurrent , 2)) *
        model.output.winding.hv.Resistance * 3 * (1 + model.output.winding.hv.strayLoss /100) 
        return model
    },
    calculateS_am2 : function(model){
        model.output.winding.lv.S_am2 = model.output.winding.lv.turnLength *
        (model.output.winding.lv.wdg_lg_imp / 1000) * (2 + 2 * model.input.winding.lv.oilDucts1)
        model.output.winding.hv.S_am2 = model.output.winding.hv.turnLength *
        (model.output.winding.hv.wdg_lg_imp / 1000) * (2 + 2 * model.input.winding.hv.oilDucts1)
        return model
    },
    calculateW_m2 : function(model){
        model.output.winding.lv.W_m2 = model.output.winding.lv.loadLoss / (3 * model.output.winding.lv.S_am2)
        model.output.winding.hv.W_m2 = model.output.winding.hv.loadLoss / (3 * model.output.winding.hv.S_am2)
        return model
    },
    calculateWdg_Temp_Rise : function(model){
        model.output.winding.lv.wdg_temp_rise = 15 + model.output.winding.lv.W_m2 / 5
        model.output.winding.hv.wdg_temp_rise = model.output.winding.hv.W_m2 / 7
        return model
    },
    calculateL_Id_D : function(model){
        model.output.others.L_ID_D = model.output.others.J12 + model.input.coreWdg.gap_bobin
        return model
    },
    calculateL_Od_D : function(model){
        model.output.others.L_OD_D =  model.output.others.L_ID_D + model.output.others.LV_wdg
        return model
    },
    calcuateH_Id_D : function(model){
        model.output.others.H_ID_D = model.output.others.L_OD_D + model.input.coreWdg.rho
        return model
    },
    calcuateH_Od_D : function(model){
        model.output.others.H_OD_D = model.output.others.HV_WDG + model.output.others.H_ID_D
        return model
    },
    
}

export default calculator