import {
    getCommonCard,
    getCommonTitle,
    getTextField,
    getSelectField,
    getCommonContainer,
    getCommonParagraph,
    getPattern,
    getDateField,
    getLabel
} from "egov-ui-framework/ui-config/screens/specs/utils";
import { searchApiCall } from "./functions";
import { handleScreenConfigurationFieldChange as handleField } from "egov-ui-framework/ui-redux/screen-configuration/actions";
const resetFields = (state, dispatch) => {
    dispatch(
        handleField(
            "search",
            "components.div.children.citizenApplication.children.cardContent.children.appTradeAndMobNumContainer.children.city",
            "props.value",
            ""
        )
    );
    dispatch(
        handleField(
            "search",
            "components.div.children.citizenApplication.children.cardContent.children.appTradeAndMobNumContainer.children.propertyid",
            "props.value",
            ""
        )
    );
    dispatch(
        handleField(
            "search",
            "components.div.children.citizenApplication.children.cardContent.children.appTradeAndMobNumContainer.children.ownerMobNo",
            "props.value",
            ""
        )
    );
    dispatch(
        handleField(
            "search",
            "components.div.children.citizenApplication.children.cardContent.children.appTradeAndMobNumContainer.children.consumerid",
            "props.value",
            ""
        )
    );
    dispatch(
        handleField(
            "search",
            "components.div.children.citizenApplication.children.cardContent.children.appTradeAndMobNumContainer.children.oldConsumerid",
            "props.value",
            ""
        )
    );
};
export const citizenApplication = getCommonCard({
    subHeader: getCommonTitle({
        labelKey: "WS_SEARCH_CONNECTION_HEADER"
    }),
    subParagraph: getCommonParagraph({
        labelKey: "WS_HOME_SEARCH_RESULTS_DESC"
    }),
    appTradeAndMobNumContainer: getCommonContainer({
        city: getSelectField({
            label: {
                labelKey: "WS_PROP_DETAIL_CITY"
            },
            placeholder: {
                labelKey: "WS_PROP_DETAIL_CITY_PLACEHOLDER"
            },
            localePrefix: {
                moduleName: "WF",
                masterName: "FIRENOC"
            },
            jsonPath: "searchScreen.city",
            sourceJsonPath: "applyScreenMdmsData.searchScreen.status",
            required: false,
            gridDefination: {
                xs: 12,
                sm: 4
            }
        }),
        propertyid: getTextField({
            label: {
                labelKey: "WS_PROPERTY_ID_LABEL"
            },
            placeholder: {
                labelKey: "WS_PROPERTY_ID_PLACEHOLDER"
            },
            gridDefination: {
                xs: 12,
                sm: 4
            },
            required: false,
            pattern: /^[a-zA-Z0-9-]*$/i,
            errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
            jsonPath: "searchScreen.propertyId"
        }),
        ownerMobNo: getTextField({
            label: {
                labelKey: "WS_OWN_DETAIL_MOBILE_NO_LABEL"
            },
            placeholder: {
                labelKey: "WS_OWN_DETAIL_MOBILE_NO_PLACEHOLDER"
            },
            gridDefination: {
                xs: 12,
                sm: 4
            },
            iconObj: {
                label: "+91 |",
                position: "start"
            },
            required: false,
            pattern: getPattern("MobileNo"),
            jsonPath: "searchScreen.mobileNumber",
            errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG"
        }),
        consumerid: getTextField({
            label: {
                labelKey: "WS_MYCONNECTIONS_CONSUMER_NO"
            },
            placeholder: {
                labelKey: "WS_SEARCH_CONNNECTION_CONSUMER_PLACEHOLDER"
            },
            gridDefination: {
                xs: 12,
                sm: 4
            },
            required: false,
            pattern: /^[a-zA-Z0-9-]*$/i,
            errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
            jsonPath: "searchScreen.consumerId"
        }),
        oldConsumerid: getTextField({
            label: {
                labelKey: "WS_SEARCH_CONNNECTION_OLD_CONSUMER_LABEL"
            },
            placeholder: {
                labelKey: "WS_SEARCH_CONNNECTION_OLD_CONSUMER_PLACEHOLDER"
            },
            gridDefination: {
                xs: 12,
                sm: 4
            },
            required: false,
            pattern: /^[a-zA-Z0-9-]*$/i,
            errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
            jsonPath: "searchScreen.oldConsumerId"
        }),
        //   applicationNo: getTextField({
        //     label: {
        //       labelKey: "WS_MYCONNECTIONS_APPLICATION_NO"
        //     },
        //     placeholder: {
        //       labelKey: "WS_SEARCH_CONNECTIONS_APPLICATION_NO_PLACEHOLDER"
        //     },
        //     gridDefination: {
        //       xs: 12,
        //       sm: 4
        //     },
        //     required: false,
        //     pattern: /^[a-zA-Z0-9-]*$/i,
        //     errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
        //     jsonPath: "searchScreen.fireNOCNumber"
        //   }),
    }),
    button: getCommonContainer({
        buttonContainer: getCommonContainer({
            resetButton: {
                componentPath: "Button",
                gridDefination: {
                    xs: 12,
                    sm: 6
                        // align: "center"
                },
                props: {
                    variant: "outlined",
                    style: {
                        color: "#FE7A51",
                        borderColor: "#FE7A51",
                        width: "220px",
                        height: "48px",
                        margin: "8px",
                        float: "right"
                    }
                },
                children: {
                    buttonLabel: getLabel({
                        labelKey: "WS_SEARCH_CONNECTION_RESET_BUTTON"
                    })
                },
                onClickDefination: {
                    action: "condition",
                    callBack: resetFields
                }
            },
            searchButton: {
                componentPath: "Button",
                gridDefination: {
                    xs: 12,
                    sm: 6
                        // align: "center"
                },
                props: {
                    variant: "contained",
                    style: {
                        color: "white",
                        margin: "8px",
                        backgroundColor: "rgba(0, 0, 0, 0.6000000238418579)",
                        borderRadius: "2px",
                        width: "220px",
                        height: "48px"
                    }
                },
                children: {
                    buttonLabel: getLabel({
                        labelKey: "WS_SEARCH_CONNECTION_SEARCH_BUTTON"
                    })
                },
                onClickDefination: {
                    action: "condition",
                    callBack: searchApiCall
                }
            }
        })
    })
});