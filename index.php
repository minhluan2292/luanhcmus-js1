<?php require 'functions.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title><?php siteName(); ?> | <?php pageTitle(); ?></title>
      <style type="text/css">
      .bgimg-1 {
           background-image: url("img/bg2.jpg");
           height: 100%;
          }
    .page-signin-modal {
      position: relative;
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      z-index: 1;
      display: block;
    }
    .page-signin-form-group { position: relative; }
    .page-signin-icon {
      position: absolute;
      line-height: 21px;
      width: 36px;
      border-color: rgba(0, 0, 0, .14);
      border-right-width: 1px;
      border-right-style: solid;
      left: 1px;
      top: 9px;
      text-align: center;
      font-size: 15px;
    }
    html[dir="rtl"] .page-signin-icon {
      border-right: 0;
      border-left-width: 1px;
      border-left-style: solid;
      left: auto;
      right: 1px;
    }
    html:not([dir="rtl"]) .page-signin-icon + .page-signin-form-control { padding-left: 50px; }
    html[dir="rtl"] .page-signin-icon + .page-signin-form-control { padding-right: 50px; }
    #page-signin-forgot-form {
      display: none;
    }
    .page-signin-modal > .modal-dialog { margin: 30px 10px; }
    @media (min-width: 544px) {
      .page-signin-modal > .modal-dialog { margin: 60px auto; }
    }
  </style>

    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" class="px-demo-stylesheet-bs">
    <link href="css/pixeladmin.min.css" rel="stylesheet" type="text/css" class="px-demo-stylesheet-core">
    <link href="css/pixeladmin.min-blessed1b401.css" rel="stylesheet" type="text/css">
    <link href="css/widgets.min.css" rel="stylesheet" type="text/css">
    <link href="css/demo.css" rel="stylesheet" type="text/css">
    <link href="css/adminflare.min.css" rel="stylesheet" type="text/css">
    <link href="css/font/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="css/icon/ionicons.min.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="bgimg-1">
    <header>
        <nav class="menu">
            <a href="/" title="Home">Home</a> |    
            <a href="/?page=about-us">About</a> |
            <a href="/?page=products">Products</a> |
            <a href="/?page=contact-us">Contact</a>
            <a href="/?page=login">Login</a>
        </nav>
    </header>    

    <article>
        <?php pageContent(); ?>
    </article>

</div>
</body>
</html>