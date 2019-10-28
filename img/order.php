<?php
//if (( $_POST['check-oferta'] == '') && ( $_POST['check-konf'] == ''))
//{
//echo 'не отмечено';
//}
//  else {
 //       echo 'отмечено';
 //      }

define('CRM_HOST', 'b24-l9yw11.bitrix24.ru'); // Ваш домен CRM системы
define('CRM_PORT', '443'); // Порт сервера CRM. Установлен по умолчанию
define('CRM_PATH', '/crm/configs/import/lead.php'); // Путь к компоненту lead.rest
define('CRM_LOGIN', 'lead_andrew@mail.ru'); // Логин пользователя Вашей CRM по управлению лидами
define('CRM_PASSWORD', 'Console111'); // Пароль пользователя Вашей CRM по управлению лидами
   $postData = array(
      'TITLE' => 'Заявка с сайта', // Установить значение
     'NAME' => $_POST['firstName'],
     'LAST_NAME' => $_POST['secondName'],
     'PHONE_MOBILE' => $_POST['tel'],
     'EMAIL_HOME' => $_POST['email'],
     'OPPORTUNITY' => floatval($_POST['price']),
     'COMMENTS' => 'Город: '.$_POST['city'].
     '<br>Номинал сертификата: '.$_POST['price'].
     '<br>Отобразить стоимость на сертификате: '.$_POST['indicate-price'].
     '<br>Доставка: '.$_POST['delivery'].
     '<br>Оплата: '.$_POST['payment'].''
   );
   if (defined('CRM_AUTH'))
   {
      $postData['AUTH'] = CRM_AUTH;
   }
   else
   {
      $postData['LOGIN'] = CRM_LOGIN;
      $postData['PASSWORD'] = CRM_PASSWORD;
   }
   $fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
   if ($fp)
   {
      $strPostData = '';
      foreach ($postData as $key => $value)
         $strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);
      $str = "POST ".CRM_PATH." HTTP/1.0\r\n";
      $str .= "Host: ".CRM_HOST."\r\n";
      $str .= "Content-Type: application/x-www-form-urlencoded\r\n";
      $str .= "Content-Length: ".strlen($strPostData)."\r\n";
      $str .= "Connection: close\r\n\r\n";
      $str .= $strPostData;
      fwrite($fp, $str);
      $result = '';
      while (!feof($fp))
      {
         $result .= fgets($fp, 128);
      }
      fclose($fp);
      $response = explode("\r\n\r\n", $result);
      $output = '<pre>'.print_r($response[1], 1).'</pre>';
   }
   else
   {
      echo 'Connection Failed! '.$errstr.' ('.$errno.')';
   }
?>