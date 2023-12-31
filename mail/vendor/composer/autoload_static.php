<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitea72f01470bcdb906741a56f93f26969
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitea72f01470bcdb906741a56f93f26969::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitea72f01470bcdb906741a56f93f26969::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitea72f01470bcdb906741a56f93f26969::$classMap;

        }, null, ClassLoader::class);
    }
}
