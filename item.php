<?php

class item
{
    public $id;
    public $name;

    function __construct($id,$name) {
        $this->id = $id;
        $this->name = $name;
    }

    function getName(){
        return $this->name;
    }

    function getID(){
        return $this->id;
    }
}

for($i=1;$i<=1;$i++){
    $src = fopen("item/".$i."/info.txt",r);
    $name = fread($src,filesize("item/".$i."/info.txt"));
    $item[]= new item($i,$name);
}
