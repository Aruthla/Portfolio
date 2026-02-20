# Configuration du formulaire de contact avec EmailJS

## Étapes de configuration

1. **Créer un compte EmailJS**
   - Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
   - Créez un compte gratuit

2. **Configurer un service email**
   - Dans le dashboard EmailJS, allez dans "Email Services"
   - Cliquez sur "Add New Service"
   - Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
   - Suivez les instructions pour connecter votre compte

3. **Créer un template d'email**
   - Allez dans "Email Templates"
   - Cliquez sur "Create New Template"
   - Configurez votre template avec les variables suivantes :
     - `{{from_name}}` - Nom de l'expéditeur
     - `{{from_email}}` - Email de l'expéditeur
     - `{{message}}` - Message du formulaire
     - `{{to_email}}` - Email de réception (laetitia.cli@live.fr)

   Exemple de template :
   ```
   Sujet: Nouveau message de {{from_name}}
   
   De: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

4. **Récupérer vos clés**
   - Service ID : dans "Email Services", copiez l'ID de votre service
   - Template ID : dans "Email Templates", copiez l'ID de votre template
   - Public Key : dans "Account" > "General", copiez votre "Public Key"

5. **Configurer les variables d'environnement**
   - Copiez le fichier `.env.example` en `.env`
   - Remplacez les valeurs par vos clés EmailJS :
     ```
     VITE_EMAILJS_SERVICE_ID=votre_service_id
     VITE_EMAILJS_TEMPLATE_ID=votre_template_id
     VITE_EMAILJS_PUBLIC_KEY=votre_public_key
     ```

6. **Tester localement**
   - Lancez `npm run dev`
   - Testez le formulaire de contact

7. **Déployer**
   - Lors du déploiement sur GitHub Pages, ajoutez les variables d'environnement dans les secrets GitHub :
     - Allez dans Settings > Secrets and variables > Actions
     - Ajoutez les 3 variables d'environnement

## Email de réception

Les messages du formulaire seront envoyés à : **laetitia.cli@live.fr**
