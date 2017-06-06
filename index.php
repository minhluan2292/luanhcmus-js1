<?php require 'functions.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title><?php siteName(); ?> | <?php pageTitle(); ?></title>
      <style type="text/css">
      body.bg {
           background: url("img/bg2.jpg") no-repeat center center;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover; 
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
    <link href="css/widgets.min.css" rel="stylesheet" type="text/css">
    <link href="css/demo.css" rel="stylesheet" type="text/css">
    <link href="css/adminflare.min.css" rel="stylesheet" type="text/css">
    <link href="css/font/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="css/icon/ionicons.min.css" rel="stylesheet" type="text/css">
    <link href="css/pixeladmin.min-blessed1.css" rel="stylesheet" type="text/css">
</head>
<body class="bg">

    <header>
        <nav>
            <a class="btn btn-info" href="/" title="Home">
              <span class="btn-label-icon left fa fa-home"></span>Home</a>    
            <a class="btn btn-info" href="/?p=about">
              <span class="btn-label-icon left fa fa-info-circle"></span>About</a> 
            <a class="btn btn-info" href="/?p=projects">
              <span class="btn-label-icon left fa fa-product-hunt"></span>Projects</a> 
<!--             <a class="btn btn-info" href="/?page=contact-us">
              <span class="btn-label-icon left fa fa-address-card"></span>Contact</a>  -->
            <a class="btn btn-info" href="/?p=login">
              <span class="btn-label-icon left fa fa-user"></span>Login</a>
           <a class="btn btn-danger btn-outline btn-3d active" href="/?p=readfile">
              <span class="btn-label-icon left fa fa-file"></span>File</a>
          <a class="btn active" href="/pages/fileshare/">
              <span class="btn-label-icon left fa fa-folder-open"></span>Folder Files</a>
           <a class="btn btn-warning" href="/?p=upload">
              <span class="btn-label-icon left fa fa-upload"></span>Upload file</a>
        </nav>
    </header>    

    <article>
        <?php pageContent(); ?>
    </article>


</body>
</html>