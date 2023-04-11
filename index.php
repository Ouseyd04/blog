<!doctype html>
<html lang="fr" class="h-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercice 1 - HTML, CSS, JS</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="exo_un.css">
    <script defer src="script.js"></script>
</head>
<body class="h-100">
<div class="container d-flex justify-content-center align-items-center h-100">
    <div id="register" class="w-50">
        <form>
            <div class="mb-3">
                <label for="firstname" class="form-label">Prenom</label>
                <input id="firstname" class="form-control" type="email" placeholder="John">
                <span class="badge text-bg-danger error--firstname"></span>
            </div>
            <div class="mb-3">
                <label for="lastname" class="form-label">Nom</label>
                <input id="lastname" class="form-control" type="text" placeholder="Doe">
                <span class="badge text-bg-danger error--lastname"></span>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input id="email" class="form-control" type="email" placeholder="john.doe@mail.fr">
                <span class="badge text-bg-danger error--email"></span>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <div class="input-group mb-3">
                    <input id="password" type="password" class="form-control" placeholder="Mot de passe" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="show--password">Voir le mot de passe</button>
                </div>
                <span class="badge text-bg-danger error--password"></span>
            </div>
            <button id="register--action" type="button" class="btn btn-primary">S'inscrire</button>
        </form>
    </div>
</div>
</body>
</html>