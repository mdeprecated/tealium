// This extension maps tealium page identifiers of barbarix to oewa categorypath parts.
// For a list of the tealium `event_name`s of page events, consult the tagging plan.
// The `event_name`s can also be found in barbarix code in taggingService.ts.
// We keep the source of this at https://github.schibsted.io/willhaben/willhaben-tealium-scripts/blob/master/Extensions/784_BBX_OEWA_map_tealium_ids_to_categorypath.js
// Keep it up to date in the git repo, and do not just make random changes directly in the Tealium extension.

if (!b.client || b.client.toLowerCase() !== "bbx") {
    return false;
}

if (a !== "view") {
    return false;
}

function oewaVerticalName(verticalId) {
    switch (verticalId) {
        case "1":
            return "Jobs";
        case "2":
            return "Immobilienmarkt";
        case "3":
            return "Automarkt";
        case "5":
            return "Sonstiges";
    }

    // this is a fallback, since slightly wrong oewa tags are better than broken ones
    return "Sonstiges";
}

var vertical = oewaVerticalName(b.vertical_id);

var map = {
    contact_contact: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    terms_conditions_general: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    ad_rules: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    privacy_policy: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    imprint: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    terms_conditions: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    press_about_willhaben: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    press_presstext: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    press_download: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    security_hints_overview: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    security_hints_buy: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    security_hints_account: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    security_hints_sell: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    security_hints_puppy: {
        sktg: "Service/Unternehmenskommunikation/Unternehmenskommunikation",
    },
    mywillhaben_myprofile: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    mywillhaben_changelogindata: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    login: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    register_form: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    register_confirm: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    forgot_password: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    forgot_password_confirm: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    change_password: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    my_search_agents: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    my_search_agents_create: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    my_search_agents_edit: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    my_search_agents_edit_modal: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    upselling: {
        sktg: "Service/Rubrikenmaerkte/".concat(vertical),
        pageid: "Anzeigenaufgabe",
    },
    checkout: {
        sktg: "Service/Rubrikenmaerkte/".concat(vertical),
        pageid: "Anzeigenaufgabe",
    },
    billrequest: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    invoices: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    renew_ad_page: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    my_ads: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    my_saved_ads: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
    chat_view: {
        sktg: "Service/Sonstiges/Sonstiges",
        pageid: "Meinwillhaben",
    },
};

var params = map[b.event_name];

if (!params) {
    utag.DB("ignoring unhandled event_name '" + b.event_name + "' in BBX OEWA map");
    return false;
}

b.oewa_categorypath_sktg = params.sktg;
b.oewa_categorypath_pageid = params.pageid;
