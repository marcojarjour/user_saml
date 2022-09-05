OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Tento používateľský účet bol zakázaný, obráťte sa na správcu.",
    "Saved" : "Uložené",
    "Provider" : "Poskytovateľ",
    "Unknown error, please check the log file for more details." : "Neznáma chyba. Pre viac informácií skontrolujte logy.",
    "Direct log in" : "Priame prihlásenie",
    "SSO & SAML log in" : "SSO a SAML prihlásenie",
    "This page should not be visited directly." : "Táto stránka by nemala byť zobrazovaná napriamo.",
    "Provider " : "Poskytovateľ",
    "X.509 certificate of the Service Provider" : "X.509 certifikát poskytovateľa služby",
    "Private key of the Service Provider" : "Privátny kľúč poskytovateľa služby",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Znamená, že nameID <samlp:logoutRequest>odoslané týmto poskytovateľom služieb bude šifrované.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Ukazuje, či budú správy <samlp:AuthnRequest> odoslané týmto SP podpísané. [Táto informácia bude uvedená v meta údajoch SP]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Ukazuje, či budú správy <samlp:logoutRequest> odoslané týmto SP podpísané.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Ukazuje, či budú správy <samlp:logoutResponse> odoslané týmto SP podpísané.",
    "Whether the metadata should be signed." : "Či majú byť meta údaje podpisované.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Označuje požiadavku na podpísanie prvkov <samlp:Response>, <samlp:LogoutRequest> a <samlp:LogoutResponse> prijatých týmto SP.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Označuje požiadavku na podpísanie prvkov <saml:Assertion> prijatých týmto SP. [Táto informácia bude uvedená v meta údajoch SP]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Označuje požiadavku na šifrovanie prvkov <saml:Assertion> prijatých týmto SP.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : " Označuje požiadavku, aby bol prítomný prvok NameID v SAMLResponse prijatý týmto SP.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Označuje požiadavku na šifrovanie NameID prijatého týmto SP.",
    "Indicates if the SP will validate all received XML." : "Označuje, či SP overí všetky prijaté XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-kóduje SAML malými písmenami a sada nástrojov predvolene používa veľké písmená. Povoliť kompatibilitu ADFS pri overovaní podpisu.",
    "Algorithm that the toolkit will use on signing process." : "Algoritmus, ktorý sa použije v procese podpisovania.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "Načítavať parametre dotazu z $ _SERVER. Niektoré servery SAML to vyžadujú pri požiadavkách SLO.",
    "Attribute to map the UID to." : "Atribút na priradenie UID.",
    "Attribute to map the displayname to." : "Atribút na priradenie zobrazovaného mena.",
    "Attribute to map the email address to." : "Atribút na priradenie e-mailovej adresy.",
    "Attribute to map the quota to." : "Atribút na priradenie kvóty.",
    "Attribute to map the users groups to." : "Atribút na priradenie skupiny používateľov.",
    "Attribute to map the users home to." : "Atribút na priradenie domovského priečinka používateľa.",
    "Email address" : "E-mailová adresa",
    "Encrypted" : "Šifrované",
    "Entity" : "Entita",
    "Kerberos" : "Kerberos",
    "Persistent" : "Trvalé",
    "Transient" : "Prechodné",
    "Unspecified" : "Neurčené",
    "Windows domain qualified name" : "Úplný názov domény Windows",
    "X509 subject name" : "Názov subjektu pre X509",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Použiť overenie totožnosti SAML pre %s stolných klientov (vyžaduje opätovné overenie používateľa)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Voliteľný zobrazovaný názov poskytovateľa identity (predvolené nastavenie: „Prihlásenie SSO a SAML“)",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Povoliť použitie viacerých podporných vrstiev pre použivatelské účty (napr. LDAP)",
    "SSO & SAML authentication" : "Overenie totožnosti SSO & SAML",
    "Authenticate using single sign-on" : "Overenie totožnosti pomocou zjednoteného prihlásenia (sso)",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Pomocou aplikácie SSO a SAML vášho Nextcloud môžete ľahko integrovať svoje existujúce riešenie zjednoteného prihlasovania s Nextcloud. Na zaistenie pohodlia pre používateľov môžete navyše použiť poskytovateľa používateľov Nextcloud LDAP. (napr. pri zdieľaní)\nV súčasnosti sú podporovaní a testovaní títo poskytovatelia:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Overovanie prostredníctvom premennej prostredia**\n\t* Kerberos (mod_auth_kerb)\n\t* Akýkoľvek iný poskytovateľ, ktorý overuje pomocou premennej prostredia\n\nAj keď teoreticky je akýkoľvek iný poskytovateľ overenia totožnosti využívajúci niektorý z týchto štandardov kompatibilný, radi by sme poznamenali, že neboli testované.",
    "Open documentation" : "Otvoriť dokumentáciu",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Vyberte, či chcete overovať totožnosť pomocou poskytovateľa SAML zabudovaného v Nextcloud alebo pomocou premennej prostredia.",
    "Use built-in SAML authentication" : "Použiť zabudované SAML overenie totožnosti",
    "Use environment variable" : "Použiť premennú prostredia",
    "Global settings" : "Globálne nastavenia",
    "Remove identity provider" : "Vzdialený poskytovateľ identity",
    "Add identity provider" : "Pridať poskytovateľa identity.",
    "General" : "Všeobecné",
    "Service Provider Data" : "Poskytovateľ dátových služieb",
    "If your Service Provider should use certificates you can optionally specify them here." : "Ak by poskytovateľ služieb mal používať certifikáty, môžete ich tu špecifikovať.",
    "Show Service Provider settings…" : "Zobraziť nastavenia poskytovateľa služieb...",
    "Name ID format" : "Formát identifikátora názvu",
    "Identity Provider Data" : "Poskytovateľ prihlasovacích údajov",
    "Configure your IdP settings here." : "Tu nastavte poskytovateľa prihlasovacích údajov.",
    "Identifier of the IdP entity (must be a URI)" : "Identifikátor položky poskytovateľa prihlasovacích údajov (musí byť URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Cieľová URL IdP, kam SP zašle správu s požiadavkou na overenie totožnosti",
    "Show optional Identity Provider settings…" : "Zobraziť voliteľné nastavenia poskytovateľa identity…",
    "URL Location of the IdP where the SP will send the SLO Request" : "Umiestnenie URL IdP, kam SP zašle SLO požiadavku",
    "URL Location of the IDP's SLO Response" : "Umiestnenie URL IDP, kam SLO pošle odpoveď",
    "Public X.509 certificate of the IdP" : "Verejný certifikát X.509 poskytovateľa prihlasovacích údajov",
    "Attribute mapping" : "Mapovanie atribútov",
    "If you want to optionally map attributes to the user you can configure these here." : "Ak chcete voliteľne priradiť atribúty k používateľom, môžete ich nastaviť tu.",
    "Show attribute mapping settings…" : "Zobraziť nastavenia priradzovania atribútov ...",
    "Security settings" : "Nastavenia súkromia",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Ak to vaše prostredie podporuje, odporúčame povoliť nasledujúce nastavenia, aby sa zvýšila bezpečnosť.",
    "Show security settings…" : "Zobraziť nastavenia zabezpečenia...",
    "Signatures and encryption offered" : "Podpisy a šifrovanie ponúkané",
    "Signatures and encryption required" : "Podpisy a šifrovanie vyžadované",
    "Download metadata XML" : "Sťahovať metadáta XML",
    "Reset settings" : "Resetovať nastavenia",
    "Metadata invalid" : "Neplatné metadáta",
    "Metadata valid" : "Metadáta sú platné",
    "Error" : "Chyba",
    "Account not provisioned." : "Účet nebol poskytnutý.",
    "Your account is not provisioned, access to this service is thus not possible." : "Váš účet nie je poskytnutý, prístup k tejto službe preto nie je možný.",
    "Login options:" : "Možnosti prihlásenia:",
    "Choose a authentication provider" : "Vyberte poskytovateľa overovania"
},
"nplurals=4; plural=(n % 1 == 0 && n == 1 ? 0 : n % 1 == 0 && n >= 2 && n <= 4 ? 1 : n % 1 != 0 ? 2: 3);");
