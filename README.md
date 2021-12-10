# java-spring-angular-REST
Projeto feito com o backend com java spring e enviado para o front-end, feito em angular, através de APIs REST

## URLs disponíveis na API

<a>http://localhost:8080/api/v1/cargos</a> (GET)<br/>
<a>http://localhost:8080/api/v1/cargos/(id)</a>(POST, PUT, DELETE)<br/>
<a>http://localhost:8080/api/v1/clientes</a> (GET)<br/>
<a>http://localhost:8080/api/v1/clientes/(id)</a>(POST, PUT, DELETE)<br/>
<a>http://localhost:8080/api/v1/funcionarios</a>(GET)<br/>


### Para iniciar o Back-end
mvn org.springframework.boot:spring-boot-maven-plugin:run

### Para iniciar o Front-end
cd .\src\main\frontend\ && ng serve --port 4200 --proxy-config proxy.conf.json
