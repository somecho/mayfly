goog.provide('nextjournal.markdown.parser.emoji');
nextjournal.markdown.parser.emoji.regex_java = "^(?:[#*0-9]\\x{FE0F}?\\x{20E3}|[\\xA9\\xAE\\x{203C}\\x{2049}\\x{2122}\\x{2139}\\x{2194}-\\x{2199}\\x{21A9}\\x{21AA}\\x{231A}\\x{231B}\\x{2328}\\x{23CF}\\x{23ED}-\\x{23EF}\\x{23F1}\\x{23F2}\\x{23F8}-\\x{23FA}\\x{24C2}\\x{25AA}\\x{25AB}\\x{25B6}\\x{25C0}\\x{25FB}\\x{25FC}\\x{25FE}\\x{2600}-\\x{2604}\\x{260E}\\x{2611}\\x{2614}\\x{2615}\\x{2618}\\x{2620}\\x{2622}\\x{2623}\\x{2626}\\x{262A}\\x{262E}\\x{262F}\\x{2638}-\\x{263A}\\x{2640}\\x{2642}\\x{2648}-\\x{2653}\\x{265F}\\x{2660}\\x{2663}\\x{2665}\\x{2666}\\x{2668}\\x{267B}\\x{267E}\\x{267F}\\x{2692}\\x{2694}-\\x{2697}\\x{2699}\\x{269B}\\x{269C}\\x{26A0}\\x{26A7}\\x{26AA}\\x{26B0}\\x{26B1}\\x{26BD}\\x{26BE}\\x{26C4}\\x{26C8}\\x{26CF}\\x{26D1}\\x{26D3}\\x{26E9}\\x{26F0}-\\x{26F5}\\x{26F7}\\x{26F8}\\x{26FA}\\x{2702}\\x{2708}\\x{2709}\\x{270F}\\x{2712}\\x{2714}\\x{2716}\\x{271D}\\x{2721}\\x{2733}\\x{2734}\\x{2744}\\x{2747}\\x{2757}\\x{2763}\\x{27A1}\\x{2934}\\x{2935}\\x{2B05}-\\x{2B07}\\x{2B1B}\\x{2B1C}\\x{2B55}\\x{3030}\\x{303D}\\x{3297}\\x{3299}\\x{1F004}\\x{1F170}\\x{1F171}\\x{1F17E}\\x{1F17F}\\x{1F202}\\x{1F237}\\x{1F321}\\x{1F324}-\\x{1F32C}\\x{1F336}\\x{1F37D}\\x{1F396}\\x{1F397}\\x{1F399}-\\x{1F39B}\\x{1F39E}\\x{1F39F}\\x{1F3CD}\\x{1F3CE}\\x{1F3D4}-\\x{1F3DF}\\x{1F3F5}\\x{1F3F7}\\x{1F43F}\\x{1F4FD}\\x{1F549}\\x{1F54A}\\x{1F56F}\\x{1F570}\\x{1F573}\\x{1F576}-\\x{1F579}\\x{1F587}\\x{1F58A}-\\x{1F58D}\\x{1F5A5}\\x{1F5A8}\\x{1F5B1}\\x{1F5B2}\\x{1F5BC}\\x{1F5C2}-\\x{1F5C4}\\x{1F5D1}-\\x{1F5D3}\\x{1F5DC}-\\x{1F5DE}\\x{1F5E1}\\x{1F5E3}\\x{1F5E8}\\x{1F5EF}\\x{1F5F3}\\x{1F5FA}\\x{1F6CB}\\x{1F6CD}-\\x{1F6CF}\\x{1F6E0}-\\x{1F6E5}\\x{1F6E9}\\x{1F6F0}\\x{1F6F3}]\\x{FE0F}?|[\\x{261D}\\x{270C}\\x{270D}\\x{1F574}\\x{1F590}][\\x{FE0F}\\x{1F3FB}-\\x{1F3FF}]?|[\\x{26F9}\\x{1F3CB}\\x{1F3CC}\\x{1F575}][\\x{FE0F}\\x{1F3FB}-\\x{1F3FF}]?(?:\\x{200D}[\\x{2640}\\x{2642}]\\x{FE0F}?)?|[\\x{270A}\\x{270B}\\x{1F385}\\x{1F3C2}\\x{1F3C7}\\x{1F442}\\x{1F443}\\x{1F446}-\\x{1F450}\\x{1F466}\\x{1F467}\\x{1F46B}-\\x{1F46D}\\x{1F472}\\x{1F474}-\\x{1F476}\\x{1F478}\\x{1F47C}\\x{1F483}\\x{1F485}\\x{1F48F}\\x{1F491}\\x{1F4AA}\\x{1F57A}\\x{1F595}\\x{1F596}\\x{1F64C}\\x{1F64F}\\x{1F6C0}\\x{1F6CC}\\x{1F90C}\\x{1F90F}\\x{1F918}-\\x{1F91F}\\x{1F930}-\\x{1F934}\\x{1F936}\\x{1F977}\\x{1F9B5}\\x{1F9B6}\\x{1F9BB}\\x{1F9D2}\\x{1F9D3}\\x{1F9D5}\\x{1FAC3}-\\x{1FAC5}\\x{1FAF0}\\x{1FAF2}-\\x{1FAF8}][\\x{1F3FB}-\\x{1F3FF}]?|[\\x{1F3C3}\\x{1F3C4}\\x{1F3CA}\\x{1F46E}\\x{1F470}\\x{1F471}\\x{1F473}\\x{1F477}\\x{1F481}\\x{1F482}\\x{1F486}\\x{1F487}\\x{1F645}-\\x{1F647}\\x{1F64B}\\x{1F64D}\\x{1F64E}\\x{1F6A3}\\x{1F6B4}-\\x{1F6B6}\\x{1F926}\\x{1F935}\\x{1F937}-\\x{1F939}\\x{1F93D}\\x{1F93E}\\x{1F9B8}\\x{1F9B9}\\x{1F9CD}-\\x{1F9CF}\\x{1F9D4}\\x{1F9D6}-\\x{1F9DD}][\\x{1F3FB}-\\x{1F3FF}]?(?:\\x{200D}[\\x{2640}\\x{2642}]\\x{FE0F}?)?|[\\x{1F408}\\x{1F426}](?:\\x{200D}\\x{2B1B})?|[\\x{1F46F}\\x{1F9DE}\\x{1F9DF}](?:\\x{200D}[\\x{2640}\\x{2642}]\\x{FE0F}?)?|[\\x{23E9}-\\x{23EC}\\x{23F0}\\x{23F3}\\x{25FD}\\x{2693}\\x{26A1}\\x{26AB}\\x{26C5}\\x{26CE}\\x{26D4}\\x{26EA}\\x{26FD}\\x{2705}\\x{2728}\\x{274C}\\x{274E}\\x{2753}-\\x{2755}\\x{2795}-\\x{2797}\\x{27B0}\\x{27BF}\\x{2B50}\\x{1F0CF}\\x{1F18E}\\x{1F191}-\\x{1F19A}\\x{1F201}\\x{1F21A}\\x{1F22F}\\x{1F232}-\\x{1F236}\\x{1F238}-\\x{1F23A}\\x{1F250}\\x{1F251}\\x{1F300}-\\x{1F320}\\x{1F32D}-\\x{1F335}\\x{1F337}-\\x{1F37C}\\x{1F37E}-\\x{1F384}\\x{1F386}-\\x{1F393}\\x{1F3A0}-\\x{1F3C1}\\x{1F3C5}\\x{1F3C6}\\x{1F3C8}\\x{1F3C9}\\x{1F3CF}-\\x{1F3D3}\\x{1F3E0}-\\x{1F3F0}\\x{1F3F8}-\\x{1F407}\\x{1F409}-\\x{1F414}\\x{1F416}-\\x{1F425}\\x{1F427}-\\x{1F43A}\\x{1F43C}-\\x{1F43E}\\x{1F440}\\x{1F444}\\x{1F445}\\x{1F451}-\\x{1F465}\\x{1F46A}\\x{1F479}-\\x{1F47B}\\x{1F47D}-\\x{1F480}\\x{1F484}\\x{1F488}-\\x{1F48E}\\x{1F490}\\x{1F492}-\\x{1F4A9}\\x{1F4AB}-\\x{1F4FC}\\x{1F4FF}-\\x{1F53D}\\x{1F54B}-\\x{1F54E}\\x{1F550}-\\x{1F567}\\x{1F5A4}\\x{1F5FB}-\\x{1F62D}\\x{1F62F}-\\x{1F634}\\x{1F637}-\\x{1F644}\\x{1F648}-\\x{1F64A}\\x{1F680}-\\x{1F6A2}\\x{1F6A4}-\\x{1F6B3}\\x{1F6B7}-\\x{1F6BF}\\x{1F6C1}-\\x{1F6C5}\\x{1F6D0}-\\x{1F6D2}\\x{1F6D5}-\\x{1F6D7}\\x{1F6DC}-\\x{1F6DF}\\x{1F6EB}\\x{1F6EC}\\x{1F6F4}-\\x{1F6FC}\\x{1F7E0}-\\x{1F7EB}\\x{1F7F0}\\x{1F90D}\\x{1F90E}\\x{1F910}-\\x{1F917}\\x{1F920}-\\x{1F925}\\x{1F927}-\\x{1F92F}\\x{1F93A}\\x{1F93F}-\\x{1F945}\\x{1F947}-\\x{1F976}\\x{1F978}-\\x{1F9B4}\\x{1F9B7}\\x{1F9BA}\\x{1F9BC}-\\x{1F9CC}\\x{1F9D0}\\x{1F9E0}-\\x{1F9FF}\\x{1FA70}-\\x{1FA7C}\\x{1FA80}-\\x{1FA88}\\x{1FA90}-\\x{1FABD}\\x{1FABF}-\\x{1FAC2}\\x{1FACE}-\\x{1FADB}\\x{1FAE0}-\\x{1FAE8}]|\\x{2764}\\x{FE0F}?(?:\\x{200D}[\\x{1F525}\\x{1FA79}])?|\\x{1F1E6}[\\x{1F1E8}-\\x{1F1EC}\\x{1F1EE}\\x{1F1F1}\\x{1F1F2}\\x{1F1F4}\\x{1F1F6}-\\x{1F1FA}\\x{1F1FC}\\x{1F1FD}\\x{1F1FF}]|\\x{1F1E7}[\\x{1F1E6}\\x{1F1E7}\\x{1F1E9}-\\x{1F1EF}\\x{1F1F1}-\\x{1F1F4}\\x{1F1F6}-\\x{1F1F9}\\x{1F1FB}\\x{1F1FC}\\x{1F1FE}\\x{1F1FF}]|\\x{1F1E8}[\\x{1F1E6}\\x{1F1E8}\\x{1F1E9}\\x{1F1EB}-\\x{1F1EE}\\x{1F1F0}-\\x{1F1F5}\\x{1F1F7}\\x{1F1FA}-\\x{1F1FF}]|\\x{1F1E9}[\\x{1F1EA}\\x{1F1EC}\\x{1F1EF}\\x{1F1F0}\\x{1F1F2}\\x{1F1F4}\\x{1F1FF}]|\\x{1F1EA}[\\x{1F1E6}\\x{1F1E8}\\x{1F1EA}\\x{1F1EC}\\x{1F1ED}\\x{1F1F7}-\\x{1F1FA}]|\\x{1F1EB}[\\x{1F1EE}-\\x{1F1F0}\\x{1F1F2}\\x{1F1F4}\\x{1F1F7}]|\\x{1F1EC}[\\x{1F1E6}\\x{1F1E7}\\x{1F1E9}-\\x{1F1EE}\\x{1F1F1}-\\x{1F1F3}\\x{1F1F5}-\\x{1F1FA}\\x{1F1FC}\\x{1F1FE}]|\\x{1F1ED}[\\x{1F1F0}\\x{1F1F2}\\x{1F1F3}\\x{1F1F7}\\x{1F1F9}\\x{1F1FA}]|\\x{1F1EE}[\\x{1F1E8}-\\x{1F1EA}\\x{1F1F1}-\\x{1F1F4}\\x{1F1F6}-\\x{1F1F9}]|\\x{1F1EF}[\\x{1F1EA}\\x{1F1F2}\\x{1F1F4}\\x{1F1F5}]|\\x{1F1F0}[\\x{1F1EA}\\x{1F1EC}-\\x{1F1EE}\\x{1F1F2}\\x{1F1F3}\\x{1F1F5}\\x{1F1F7}\\x{1F1FC}\\x{1F1FE}\\x{1F1FF}]|\\x{1F1F1}[\\x{1F1E6}-\\x{1F1E8}\\x{1F1EE}\\x{1F1F0}\\x{1F1F7}-\\x{1F1FB}\\x{1F1FE}]|\\x{1F1F2}[\\x{1F1E6}\\x{1F1E8}-\\x{1F1ED}\\x{1F1F0}-\\x{1F1FF}]|\\x{1F1F3}[\\x{1F1E6}\\x{1F1E8}\\x{1F1EA}-\\x{1F1EC}\\x{1F1EE}\\x{1F1F1}\\x{1F1F4}\\x{1F1F5}\\x{1F1F7}\\x{1F1FA}\\x{1F1FF}]|\\x{1F1F4}\\x{1F1F2}|\\x{1F1F5}[\\x{1F1E6}\\x{1F1EA}-\\x{1F1ED}\\x{1F1F0}-\\x{1F1F3}\\x{1F1F7}-\\x{1F1F9}\\x{1F1FC}\\x{1F1FE}]|\\x{1F1F6}\\x{1F1E6}|\\x{1F1F7}[\\x{1F1EA}\\x{1F1F4}\\x{1F1F8}\\x{1F1FA}\\x{1F1FC}]|\\x{1F1F8}[\\x{1F1E6}-\\x{1F1EA}\\x{1F1EC}-\\x{1F1F4}\\x{1F1F7}-\\x{1F1F9}\\x{1F1FB}\\x{1F1FD}-\\x{1F1FF}]|\\x{1F1F9}[\\x{1F1E6}\\x{1F1E8}\\x{1F1E9}\\x{1F1EB}-\\x{1F1ED}\\x{1F1EF}-\\x{1F1F4}\\x{1F1F7}\\x{1F1F9}\\x{1F1FB}\\x{1F1FC}\\x{1F1FF}]|\\x{1F1FA}[\\x{1F1E6}\\x{1F1EC}\\x{1F1F2}\\x{1F1F3}\\x{1F1F8}\\x{1F1FE}\\x{1F1FF}]|\\x{1F1FB}[\\x{1F1E6}\\x{1F1E8}\\x{1F1EA}\\x{1F1EC}\\x{1F1EE}\\x{1F1F3}\\x{1F1FA}]|\\x{1F1FC}[\\x{1F1EB}\\x{1F1F8}]|\\x{1F1FD}\\x{1F1F0}|\\x{1F1FE}[\\x{1F1EA}\\x{1F1F9}]|\\x{1F1FF}[\\x{1F1E6}\\x{1F1F2}\\x{1F1FC}]|\\x{1F3F3}\\x{FE0F}?(?:\\x{200D}(?:\\x{26A7}\\x{FE0F}?|\\x{1F308}))?|\\x{1F3F4}(?:\\x{200D}\\x{2620}\\x{FE0F}?|\\x{E0067}\\x{E0062}(?:\\x{E0065}\\x{E006E}\\x{E0067}|\\x{E0073}\\x{E0063}\\x{E0074}|\\x{E0077}\\x{E006C}\\x{E0073})\\x{E007F})?|\\x{1F415}(?:\\x{200D}\\x{1F9BA})?|\\x{1F43B}(?:\\x{200D}\\x{2744}\\x{FE0F}?)?|\\x{1F441}\\x{FE0F}?(?:\\x{200D}\\x{1F5E8}\\x{FE0F}?)?|\\x{1F468}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F468}\\x{1F469}]\\x{200D}(?:\\x{1F466}(?:\\x{200D}\\x{1F466})?|\\x{1F467}(?:\\x{200D}[\\x{1F466}\\x{1F467}])?)|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F468}|\\x{1F466}(?:\\x{200D}\\x{1F466})?|\\x{1F467}(?:\\x{200D}[\\x{1F466}\\x{1F467}])?)|\\x{1F3FB}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F468}[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}\\x{1F468}[\\x{1F3FC}-\\x{1F3FF}]))?|\\x{1F3FC}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F468}[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}\\x{1F468}[\\x{1F3FB}\\x{1F3FD}-\\x{1F3FF}]))?|\\x{1F3FD}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F468}[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}\\x{1F468}[\\x{1F3FB}\\x{1F3FC}\\x{1F3FE}\\x{1F3FF}]))?|\\x{1F3FE}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F468}[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}\\x{1F468}[\\x{1F3FB}-\\x{1F3FD}\\x{1F3FF}]))?|\\x{1F3FF}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F468}[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}\\x{1F468}[\\x{1F3FB}-\\x{1F3FE}]))?)?|\\x{1F469}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?[\\x{1F468}\\x{1F469}]|\\x{1F466}(?:\\x{200D}\\x{1F466})?|\\x{1F467}(?:\\x{200D}[\\x{1F466}\\x{1F467}])?|\\x{1F469}\\x{200D}(?:\\x{1F466}(?:\\x{200D}\\x{1F466})?|\\x{1F467}(?:\\x{200D}[\\x{1F466}\\x{1F467}])?))|\\x{1F3FB}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:[\\x{1F468}\\x{1F469}]|\\x{1F48B}\\x{200D}[\\x{1F468}\\x{1F469}])[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}[\\x{1F468}\\x{1F469}][\\x{1F3FC}-\\x{1F3FF}]))?|\\x{1F3FC}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:[\\x{1F468}\\x{1F469}]|\\x{1F48B}\\x{200D}[\\x{1F468}\\x{1F469}])[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}[\\x{1F468}\\x{1F469}][\\x{1F3FB}\\x{1F3FD}-\\x{1F3FF}]))?|\\x{1F3FD}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:[\\x{1F468}\\x{1F469}]|\\x{1F48B}\\x{200D}[\\x{1F468}\\x{1F469}])[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}[\\x{1F468}\\x{1F469}][\\x{1F3FB}\\x{1F3FC}\\x{1F3FE}\\x{1F3FF}]))?|\\x{1F3FE}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:[\\x{1F468}\\x{1F469}]|\\x{1F48B}\\x{200D}[\\x{1F468}\\x{1F469}])[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}[\\x{1F468}\\x{1F469}][\\x{1F3FB}-\\x{1F3FD}\\x{1F3FF}]))?|\\x{1F3FF}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:[\\x{1F468}\\x{1F469}]|\\x{1F48B}\\x{200D}[\\x{1F468}\\x{1F469}])[\\x{1F3FB}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}[\\x{1F468}\\x{1F469}][\\x{1F3FB}-\\x{1F3FE}]))?)?|\\x{1F62E}(?:\\x{200D}\\x{1F4A8})?|\\x{1F635}(?:\\x{200D}\\x{1F4AB})?|\\x{1F636}(?:\\x{200D}\\x{1F32B}\\x{FE0F}?)?|\\x{1F93C}(?:[\\x{1F3FB}-\\x{1F3FF}]|\\x{200D}[\\x{2640}\\x{2642}]\\x{FE0F}?)?|\\x{1F9D1}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F384}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{1F91D}\\x{200D}\\x{1F9D1})|\\x{1F3FB}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F384}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F9D1}[\\x{1F3FC}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}\\x{1F9D1}[\\x{1F3FB}-\\x{1F3FF}]))?|\\x{1F3FC}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F384}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F9D1}[\\x{1F3FB}\\x{1F3FD}-\\x{1F3FF}]|\\x{1F91D}\\x{200D}\\x{1F9D1}[\\x{1F3FB}-\\x{1F3FF}]))?|\\x{1F3FD}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F384}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F9D1}[\\x{1F3FB}\\x{1F3FC}\\x{1F3FE}\\x{1F3FF}]|\\x{1F91D}\\x{200D}\\x{1F9D1}[\\x{1F3FB}-\\x{1F3FF}]))?|\\x{1F3FE}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F384}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F9D1}[\\x{1F3FB}-\\x{1F3FD}\\x{1F3FF}]|\\x{1F91D}\\x{200D}\\x{1F9D1}[\\x{1F3FB}-\\x{1F3FF}]))?|\\x{1F3FF}(?:\\x{200D}(?:[\\x{2695}\\x{2696}\\x{2708}]\\x{FE0F}?|[\\x{1F33E}\\x{1F373}\\x{1F37C}\\x{1F384}\\x{1F393}\\x{1F3A4}\\x{1F3A8}\\x{1F3EB}\\x{1F3ED}\\x{1F4BB}\\x{1F4BC}\\x{1F527}\\x{1F52C}\\x{1F680}\\x{1F692}\\x{1F9AF}-\\x{1F9B3}\\x{1F9BC}\\x{1F9BD}]|\\x{2764}\\x{FE0F}?\\x{200D}(?:\\x{1F48B}\\x{200D})?\\x{1F9D1}[\\x{1F3FB}-\\x{1F3FE}]|\\x{1F91D}\\x{200D}\\x{1F9D1}[\\x{1F3FB}-\\x{1F3FF}]))?)?|\\x{1FAF1}(?:\\x{1F3FB}(?:\\x{200D}\\x{1FAF2}[\\x{1F3FC}-\\x{1F3FF}])?|\\x{1F3FC}(?:\\x{200D}\\x{1FAF2}[\\x{1F3FB}\\x{1F3FD}-\\x{1F3FF}])?|\\x{1F3FD}(?:\\x{200D}\\x{1FAF2}[\\x{1F3FB}\\x{1F3FC}\\x{1F3FE}\\x{1F3FF}])?|\\x{1F3FE}(?:\\x{200D}\\x{1FAF2}[\\x{1F3FB}-\\x{1F3FD}\\x{1F3FF}])?|\\x{1F3FF}(?:\\x{200D}\\x{1FAF2}[\\x{1F3FB}-\\x{1F3FE}])?)?)+";
nextjournal.markdown.parser.emoji.regex_js = "^(?:[#*0-9]\\uFE0F?\\u20E3|[\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u23CF\\u23ED-\\u23EF\\u23F1\\u23F2\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB\\u25FC\\u25FE\\u2600-\\u2604\\u260E\\u2611\\u2614\\u2615\\u2618\\u2620\\u2622\\u2623\\u2626\\u262A\\u262E\\u262F\\u2638-\\u263A\\u2640\\u2642\\u2648-\\u2653\\u265F\\u2660\\u2663\\u2665\\u2666\\u2668\\u267B\\u267E\\u267F\\u2692\\u2694-\\u2697\\u2699\\u269B\\u269C\\u26A0\\u26A7\\u26AA\\u26B0\\u26B1\\u26BD\\u26BE\\u26C4\\u26C8\\u26CF\\u26D1\\u26D3\\u26E9\\u26F0-\\u26F5\\u26F7\\u26F8\\u26FA\\u2702\\u2708\\u2709\\u270F\\u2712\\u2714\\u2716\\u271D\\u2721\\u2733\\u2734\\u2744\\u2747\\u2757\\u2763\\u27A1\\u2934\\u2935\\u2B05-\\u2B07\\u2B1B\\u2B1C\\u2B55\\u3030\\u303D\\u3297\\u3299]\\uFE0F?|[\\u261D\\u270C\\u270D](?:\\uFE0F|\\uD83C[\\uDFFB-\\uDFFF])?|[\\u270A\\u270B](?:\\uD83C[\\uDFFB-\\uDFFF])?|[\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u2693\\u26A1\\u26AB\\u26C5\\u26CE\\u26D4\\u26EA\\u26FD\\u2705\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2795-\\u2797\\u27B0\\u27BF\\u2B50]|\\u26F9(?:\\uFE0F|\\uD83C[\\uDFFB-\\uDFFF])?(?:\\u200D[\\u2640\\u2642]\\uFE0F?)?|\\u2764\\uFE0F?(?:\\u200D(?:\\uD83D\\uDD25|\\uD83E\\uDE79))?|\\uD83C(?:[\\uDC04\\uDD70\\uDD71\\uDD7E\\uDD7F\\uDE02\\uDE37\\uDF21\\uDF24-\\uDF2C\\uDF36\\uDF7D\\uDF96\\uDF97\\uDF99-\\uDF9B\\uDF9E\\uDF9F\\uDFCD\\uDFCE\\uDFD4-\\uDFDF\\uDFF5\\uDFF7]\\uFE0F?|[\\uDF85\\uDFC2\\uDFC7](?:\\uD83C[\\uDFFB-\\uDFFF])?|[\\uDFC3\\uDFC4\\uDFCA](?:\\uD83C[\\uDFFB-\\uDFFF])?(?:\\u200D[\\u2640\\u2642]\\uFE0F?)?|[\\uDFCB\\uDFCC](?:\\uFE0F|\\uD83C[\\uDFFB-\\uDFFF])?(?:\\u200D[\\u2640\\u2642]\\uFE0F?)?|[\\uDCCF\\uDD8E\\uDD91-\\uDD9A\\uDE01\\uDE1A\\uDE2F\\uDE32-\\uDE36\\uDE38-\\uDE3A\\uDE50\\uDE51\\uDF00-\\uDF20\\uDF2D-\\uDF35\\uDF37-\\uDF7C\\uDF7E-\\uDF84\\uDF86-\\uDF93\\uDFA0-\\uDFC1\\uDFC5\\uDFC6\\uDFC8\\uDFC9\\uDFCF-\\uDFD3\\uDFE0-\\uDFF0\\uDFF8-\\uDFFF]|\\uDDE6\\uD83C[\\uDDE8-\\uDDEC\\uDDEE\\uDDF1\\uDDF2\\uDDF4\\uDDF6-\\uDDFA\\uDDFC\\uDDFD\\uDDFF]|\\uDDE7\\uD83C[\\uDDE6\\uDDE7\\uDDE9-\\uDDEF\\uDDF1-\\uDDF4\\uDDF6-\\uDDF9\\uDDFB\\uDDFC\\uDDFE\\uDDFF]|\\uDDE8\\uD83C[\\uDDE6\\uDDE8\\uDDE9\\uDDEB-\\uDDEE\\uDDF0-\\uDDF5\\uDDF7\\uDDFA-\\uDDFF]|\\uDDE9\\uD83C[\\uDDEA\\uDDEC\\uDDEF\\uDDF0\\uDDF2\\uDDF4\\uDDFF]|\\uDDEA\\uD83C[\\uDDE6\\uDDE8\\uDDEA\\uDDEC\\uDDED\\uDDF7-\\uDDFA]|\\uDDEB\\uD83C[\\uDDEE-\\uDDF0\\uDDF2\\uDDF4\\uDDF7]|\\uDDEC\\uD83C[\\uDDE6\\uDDE7\\uDDE9-\\uDDEE\\uDDF1-\\uDDF3\\uDDF5-\\uDDFA\\uDDFC\\uDDFE]|\\uDDED\\uD83C[\\uDDF0\\uDDF2\\uDDF3\\uDDF7\\uDDF9\\uDDFA]|\\uDDEE\\uD83C[\\uDDE8-\\uDDEA\\uDDF1-\\uDDF4\\uDDF6-\\uDDF9]|\\uDDEF\\uD83C[\\uDDEA\\uDDF2\\uDDF4\\uDDF5]|\\uDDF0\\uD83C[\\uDDEA\\uDDEC-\\uDDEE\\uDDF2\\uDDF3\\uDDF5\\uDDF7\\uDDFC\\uDDFE\\uDDFF]|\\uDDF1\\uD83C[\\uDDE6-\\uDDE8\\uDDEE\\uDDF0\\uDDF7-\\uDDFB\\uDDFE]|\\uDDF2\\uD83C[\\uDDE6\\uDDE8-\\uDDED\\uDDF0-\\uDDFF]|\\uDDF3\\uD83C[\\uDDE6\\uDDE8\\uDDEA-\\uDDEC\\uDDEE\\uDDF1\\uDDF4\\uDDF5\\uDDF7\\uDDFA\\uDDFF]|\\uDDF4\\uD83C\\uDDF2|\\uDDF5\\uD83C[\\uDDE6\\uDDEA-\\uDDED\\uDDF0-\\uDDF3\\uDDF7-\\uDDF9\\uDDFC\\uDDFE]|\\uDDF6\\uD83C\\uDDE6|\\uDDF7\\uD83C[\\uDDEA\\uDDF4\\uDDF8\\uDDFA\\uDDFC]|\\uDDF8\\uD83C[\\uDDE6-\\uDDEA\\uDDEC-\\uDDF4\\uDDF7-\\uDDF9\\uDDFB\\uDDFD-\\uDDFF]|\\uDDF9\\uD83C[\\uDDE6\\uDDE8\\uDDE9\\uDDEB-\\uDDED\\uDDEF-\\uDDF4\\uDDF7\\uDDF9\\uDDFB\\uDDFC\\uDDFF]|\\uDDFA\\uD83C[\\uDDE6\\uDDEC\\uDDF2\\uDDF3\\uDDF8\\uDDFE\\uDDFF]|\\uDDFB\\uD83C[\\uDDE6\\uDDE8\\uDDEA\\uDDEC\\uDDEE\\uDDF3\\uDDFA]|\\uDDFC\\uD83C[\\uDDEB\\uDDF8]|\\uDDFD\\uD83C\\uDDF0|\\uDDFE\\uD83C[\\uDDEA\\uDDF9]|\\uDDFF\\uD83C[\\uDDE6\\uDDF2\\uDDFC]|\\uDFF3\\uFE0F?(?:\\u200D(?:\\u26A7\\uFE0F?|\\uD83C\\uDF08))?|\\uDFF4(?:\\u200D\\u2620\\uFE0F?|\\uDB40\\uDC67\\uDB40\\uDC62\\uDB40(?:\\uDC65\\uDB40\\uDC6E\\uDB40\\uDC67|\\uDC73\\uDB40\\uDC63\\uDB40\\uDC74|\\uDC77\\uDB40\\uDC6C\\uDB40\\uDC73)\\uDB40\\uDC7F)?)|\\uD83D(?:[\\uDC08\\uDC26](?:\\u200D\\u2B1B)?|[\\uDC3F\\uDCFD\\uDD49\\uDD4A\\uDD6F\\uDD70\\uDD73\\uDD76-\\uDD79\\uDD87\\uDD8A-\\uDD8D\\uDDA5\\uDDA8\\uDDB1\\uDDB2\\uDDBC\\uDDC2-\\uDDC4\\uDDD1-\\uDDD3\\uDDDC-\\uDDDE\\uDDE1\\uDDE3\\uDDE8\\uDDEF\\uDDF3\\uDDFA\\uDECB\\uDECD-\\uDECF\\uDEE0-\\uDEE5\\uDEE9\\uDEF0\\uDEF3]\\uFE0F?|[\\uDC42\\uDC43\\uDC46-\\uDC50\\uDC66\\uDC67\\uDC6B-\\uDC6D\\uDC72\\uDC74-\\uDC76\\uDC78\\uDC7C\\uDC83\\uDC85\\uDC8F\\uDC91\\uDCAA\\uDD7A\\uDD95\\uDD96\\uDE4C\\uDE4F\\uDEC0\\uDECC](?:\\uD83C[\\uDFFB-\\uDFFF])?|[\\uDC6E\\uDC70\\uDC71\\uDC73\\uDC77\\uDC81\\uDC82\\uDC86\\uDC87\\uDE45-\\uDE47\\uDE4B\\uDE4D\\uDE4E\\uDEA3\\uDEB4-\\uDEB6](?:\\uD83C[\\uDFFB-\\uDFFF])?(?:\\u200D[\\u2640\\u2642]\\uFE0F?)?|[\\uDD74\\uDD90](?:\\uFE0F|\\uD83C[\\uDFFB-\\uDFFF])?|[\\uDC00-\\uDC07\\uDC09-\\uDC14\\uDC16-\\uDC25\\uDC27-\\uDC3A\\uDC3C-\\uDC3E\\uDC40\\uDC44\\uDC45\\uDC51-\\uDC65\\uDC6A\\uDC79-\\uDC7B\\uDC7D-\\uDC80\\uDC84\\uDC88-\\uDC8E\\uDC90\\uDC92-\\uDCA9\\uDCAB-\\uDCFC\\uDCFF-\\uDD3D\\uDD4B-\\uDD4E\\uDD50-\\uDD67\\uDDA4\\uDDFB-\\uDE2D\\uDE2F-\\uDE34\\uDE37-\\uDE44\\uDE48-\\uDE4A\\uDE80-\\uDEA2\\uDEA4-\\uDEB3\\uDEB7-\\uDEBF\\uDEC1-\\uDEC5\\uDED0-\\uDED2\\uDED5-\\uDED7\\uDEDC-\\uDEDF\\uDEEB\\uDEEC\\uDEF4-\\uDEFC\\uDFE0-\\uDFEB\\uDFF0]|\\uDC15(?:\\u200D\\uD83E\\uDDBA)?|\\uDC3B(?:\\u200D\\u2744\\uFE0F?)?|\\uDC41\\uFE0F?(?:\\u200D\\uD83D\\uDDE8\\uFE0F?)?|\\uDC68(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:\\uDC8B\\u200D\\uD83D)?\\uDC68|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D(?:[\\uDC68\\uDC69]\\u200D\\uD83D(?:\\uDC66(?:\\u200D\\uD83D\\uDC66)?|\\uDC67(?:\\u200D\\uD83D[\\uDC66\\uDC67])?)|[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uDC66(?:\\u200D\\uD83D\\uDC66)?|\\uDC67(?:\\u200D\\uD83D[\\uDC66\\uDC67])?)|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C(?:\\uDFFB(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:\\uDC8B\\u200D\\uD83D)?\\uDC68\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D\\uDC68\\uD83C[\\uDFFC-\\uDFFF])))?|\\uDFFC(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:\\uDC8B\\u200D\\uD83D)?\\uDC68\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D\\uDC68\\uD83C[\\uDFFB\\uDFFD-\\uDFFF])))?|\\uDFFD(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:\\uDC8B\\u200D\\uD83D)?\\uDC68\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D\\uDC68\\uD83C[\\uDFFB\\uDFFC\\uDFFE\\uDFFF])))?|\\uDFFE(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:\\uDC8B\\u200D\\uD83D)?\\uDC68\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D\\uDC68\\uD83C[\\uDFFB-\\uDFFD\\uDFFF])))?|\\uDFFF(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:\\uDC8B\\u200D\\uD83D)?\\uDC68\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D\\uDC68\\uD83C[\\uDFFB-\\uDFFE])))?))?|\\uDC69(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:\\uDC8B\\u200D\\uD83D)?[\\uDC68\\uDC69]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D(?:[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uDC66(?:\\u200D\\uD83D\\uDC66)?|\\uDC67(?:\\u200D\\uD83D[\\uDC66\\uDC67])?|\\uDC69\\u200D\\uD83D(?:\\uDC66(?:\\u200D\\uD83D\\uDC66)?|\\uDC67(?:\\u200D\\uD83D[\\uDC66\\uDC67])?))|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C(?:\\uDFFB(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:[\\uDC68\\uDC69]|\\uDC8B\\u200D\\uD83D[\\uDC68\\uDC69])\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D[\\uDC68\\uDC69]\\uD83C[\\uDFFC-\\uDFFF])))?|\\uDFFC(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:[\\uDC68\\uDC69]|\\uDC8B\\u200D\\uD83D[\\uDC68\\uDC69])\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D[\\uDC68\\uDC69]\\uD83C[\\uDFFB\\uDFFD-\\uDFFF])))?|\\uDFFD(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:[\\uDC68\\uDC69]|\\uDC8B\\u200D\\uD83D[\\uDC68\\uDC69])\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D[\\uDC68\\uDC69]\\uD83C[\\uDFFB\\uDFFC\\uDFFE\\uDFFF])))?|\\uDFFE(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:[\\uDC68\\uDC69]|\\uDC8B\\u200D\\uD83D[\\uDC68\\uDC69])\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D[\\uDC68\\uDC69]\\uD83C[\\uDFFB-\\uDFFD\\uDFFF])))?|\\uDFFF(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D\\uD83D(?:[\\uDC68\\uDC69]|\\uDC8B\\u200D\\uD83D[\\uDC68\\uDC69])\\uD83C[\\uDFFB-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83D[\\uDC68\\uDC69]\\uD83C[\\uDFFB-\\uDFFE])))?))?|\\uDC6F(?:\\u200D[\\u2640\\u2642]\\uFE0F?)?|\\uDD75(?:\\uFE0F|\\uD83C[\\uDFFB-\\uDFFF])?(?:\\u200D[\\u2640\\u2642]\\uFE0F?)?|\\uDE2E(?:\\u200D\\uD83D\\uDCA8)?|\\uDE35(?:\\u200D\\uD83D\\uDCAB)?|\\uDE36(?:\\u200D\\uD83C\\uDF2B\\uFE0F?)?)|\\uD83E(?:[\\uDD0C\\uDD0F\\uDD18-\\uDD1F\\uDD30-\\uDD34\\uDD36\\uDD77\\uDDB5\\uDDB6\\uDDBB\\uDDD2\\uDDD3\\uDDD5\\uDEC3-\\uDEC5\\uDEF0\\uDEF2-\\uDEF8](?:\\uD83C[\\uDFFB-\\uDFFF])?|[\\uDD26\\uDD35\\uDD37-\\uDD39\\uDD3D\\uDD3E\\uDDB8\\uDDB9\\uDDCD-\\uDDCF\\uDDD4\\uDDD6-\\uDDDD](?:\\uD83C[\\uDFFB-\\uDFFF])?(?:\\u200D[\\u2640\\u2642]\\uFE0F?)?|[\\uDDDE\\uDDDF](?:\\u200D[\\u2640\\u2642]\\uFE0F?)?|[\\uDD0D\\uDD0E\\uDD10-\\uDD17\\uDD20-\\uDD25\\uDD27-\\uDD2F\\uDD3A\\uDD3F-\\uDD45\\uDD47-\\uDD76\\uDD78-\\uDDB4\\uDDB7\\uDDBA\\uDDBC-\\uDDCC\\uDDD0\\uDDE0-\\uDDFF\\uDE70-\\uDE7C\\uDE80-\\uDE88\\uDE90-\\uDEBD\\uDEBF-\\uDEC2\\uDECE-\\uDEDB\\uDEE0-\\uDEE8]|\\uDD3C(?:\\u200D[\\u2640\\u2642]\\uFE0F?|\\uD83C[\\uDFFB-\\uDFFF])?|\\uDDD1(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF84\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83E\\uDDD1))|\\uD83C(?:\\uDFFB(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D(?:\\uD83D\\uDC8B\\u200D)?\\uD83E\\uDDD1\\uD83C[\\uDFFC-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF84\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83E\\uDDD1\\uD83C[\\uDFFB-\\uDFFF])))?|\\uDFFC(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D(?:\\uD83D\\uDC8B\\u200D)?\\uD83E\\uDDD1\\uD83C[\\uDFFB\\uDFFD-\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF84\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83E\\uDDD1\\uD83C[\\uDFFB-\\uDFFF])))?|\\uDFFD(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D(?:\\uD83D\\uDC8B\\u200D)?\\uD83E\\uDDD1\\uD83C[\\uDFFB\\uDFFC\\uDFFE\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF84\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83E\\uDDD1\\uD83C[\\uDFFB-\\uDFFF])))?|\\uDFFE(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D(?:\\uD83D\\uDC8B\\u200D)?\\uD83E\\uDDD1\\uD83C[\\uDFFB-\\uDFFD\\uDFFF]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF84\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83E\\uDDD1\\uD83C[\\uDFFB-\\uDFFF])))?|\\uDFFF(?:\\u200D(?:[\\u2695\\u2696\\u2708]\\uFE0F?|\\u2764\\uFE0F?\\u200D(?:\\uD83D\\uDC8B\\u200D)?\\uD83E\\uDDD1\\uD83C[\\uDFFB-\\uDFFE]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF84\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E(?:[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]|\\uDD1D\\u200D\\uD83E\\uDDD1\\uD83C[\\uDFFB-\\uDFFF])))?))?|\\uDEF1(?:\\uD83C(?:\\uDFFB(?:\\u200D\\uD83E\\uDEF2\\uD83C[\\uDFFC-\\uDFFF])?|\\uDFFC(?:\\u200D\\uD83E\\uDEF2\\uD83C[\\uDFFB\\uDFFD-\\uDFFF])?|\\uDFFD(?:\\u200D\\uD83E\\uDEF2\\uD83C[\\uDFFB\\uDFFC\\uDFFE\\uDFFF])?|\\uDFFE(?:\\u200D\\uD83E\\uDEF2\\uD83C[\\uDFFB-\\uDFFD\\uDFFF])?|\\uDFFF(?:\\u200D\\uD83E\\uDEF2\\uD83C[\\uDFFB-\\uDFFE])?))?))+";
nextjournal.markdown.parser.emoji.regex = (new RegExp(nextjournal.markdown.parser.emoji.regex_js));

//# sourceMappingURL=nextjournal.markdown.parser.emoji.js.map
