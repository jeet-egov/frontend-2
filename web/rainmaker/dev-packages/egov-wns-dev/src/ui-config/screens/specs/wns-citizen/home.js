import React from "react";
import { getCommonHeader } from "egov-ui-framework/ui-config/screens/specs/utils";
import { fetchData } from "./citizenSearchResource/citizenFunctions";
import { cityPicker } from "./citypicker";
import FormIcon from "../../../../ui-atoms-local/Icons/FormIcon";
import TradeLicenseIcon from "../../../../ui-atoms-local/Icons/TradeLicenseIcon";
import "../utils/index.css";
const header = getCommonHeader(
  {
    labelName: "Water & Sewerage",
    labelKey: "Water & Sewerage"
  },
  {
    classes: {
      root: "common-header-cont"
    }
  }
);

const cardItems = [
  {
    label: {
      labelKey: "Pay Water & Sewerage Bill",
      labelName: "Pay Water & Sewerage Bill"
    },
    icon: <TradeLicenseIcon />,
    route: {
      screenKey: "home",
      jsonPath: "components.cityPickerDialog"
    }
  },
  {
    label: {
      labelKey: "My Connections",
      labelName: "My Connections"
    },
    icon: <FormIcon />,
    route: "my-applications"
  }
];

const tradeLicenseSearchAndResult = {
  uiFramework: "material-ui",
  name: "home",
  beforeInitScreen: (action, state, dispatch) => {
    fetchData(action, state, dispatch);
    return action;
  },
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        className: "common-div-css"
      },
      children: {
        header: header,
        applyCard: {
          uiFramework: "custom-molecules",
          componentPath: "LandingPage",
          props: {
            items: cardItems,
            history: {}
          }
        },
        listCard1: {
          uiFramework: "custom-molecules-local",
          moduleName: "egov-wns",
          componentPath: "HowItWorks"
        },
        listCard2: {
          uiFramework: "custom-molecules-local",
          moduleName: "egov-wns",
          componentPath: "HowItWorks"
        }
      }
    },
    // div: {
    //   uiFramework: "custom-atoms",
    //   componentPath: "Div",
    //   props: {
    //     className: "common-div-css"
    //   },
    //   children: {
    //     header: header,
    //     applyCard: {
    //       uiFramework: "custom-atoms",
    //       componentPath: "Div",
    //       children: {
    //         card: getCommonCard({
    //           applicationSuccessContainer: getCommonContainer({
    //             icon: {
    //               uiFramework: "custom-atoms",
    //               componentPath: "Icon",
    //               props: {
    //                 iconName: "book",
    //                 variant: "outlined",
    //                 style: {
    //                   fontSize: "110px",
    //                   width: 120,
    //                   height: 100,
    //                   color: "rgba(0, 0, 0, 0.6)",
    //                   marginLeft: -22
    //                 },
    //                 iconSize: "110px"
    //               }
    //             },
    //             body: {
    //               uiFramework: "custom-atoms",
    //               componentPath: "Div",
    //               children: {
    //                 header: getCommonHeader({
    //                   labelName: "Apply for New Trade License",
    //                   labelKey: "TL_COMMON_APPL_NEW_LIC"
    //                 }),
    //                 break: getBreak(),
    //                 applyButton: {
    //                   componentPath: "Button",
    //                   props: {
    //                     variant: "contained",
    //                     color: "primary",
    //                     style: {
    //                       width: "200px",
    //                       height: "48px",
    //                       marginRight: "40px"
    //                     }
    //                   },
    //                   children: {
    //                     collectPaymentButtonLabel: getLabel({
    //                       labelName: "APPLY",
    //                       labelKey: "TL_APPLY"
    //                     })
    //                   },
    //                   onClickDefination: {
    //                     action: "condition",
    //                     callBack: showCityPicker
    //                   },
    //                   roleDefination: {
    //                     rolePath: "user-info.roles",
    //                     roles: ["CITIZEN"]
    //                   }
    //                 }
    //               }
    //             }
    //           })
    //         }),
    //         break: getBreak(),
    //         searchResults: searchResults
    //       }
    //     }
    //   }
    // },
    cityPickerDialog: {
      componentPath: "Dialog",
      props: {
        open: false,
        maxWidth: "md"
      },
      children: {
        dialogContent: {
          componentPath: "DialogContent",
          props: {
            classes: {
              root: "city-picker-dialog-style"
            }
            // style: { minHeight: "180px", minWidth: "365px" }
          },
          children: {
            popup: cityPicker
          }
        }
      }
    }
  }
};

export default tradeLicenseSearchAndResult;
