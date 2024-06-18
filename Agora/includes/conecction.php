<?php
include("../config/configuration.php");

/* Connecting to database */

class Connection
{
    public $host;
    public $user;
    public $pass;
    public $dbname;
    public $con;
    public $message;
    
    public function __construct()
    {
        $this->db_connect();
    }
    
    public function db_connect()
    {
        $this->host = DBHOST;
        $this->user = DBUSER;
        $this->pass = DBPASS; 
        $this->dbname = DBNAME; 
        $this->con = new mysqli($this->host, $this->user, $this->pass, $this->dbname);

        // Check connection
        if ($this->con->connect_error) {
            $this->message = "Connection failed: " . $this->con->connect_error;
        } else {
            $this->message = "Connected successfully...";
        }
    }
}
?>
