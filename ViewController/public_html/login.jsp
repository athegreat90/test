<div ng-controller="loginCtrl" class="col-lg-12">
      <?audit suppress oracle.ide.xml.validation-error?>
      <?audit suppress oracle.ide.xml.validation-incomplete?>
    <form action="/" id="myLogin">
        <div class="form-group">
            <label for="username">Username: </label>
            <input type="text" name="username" id="username" ng-model="username" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="password">Password: </label>
            <input type="password" name="password" id="password" ng-model="password" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="group">Group: </label>
            <input type="text" name="group" id="group" ng-model="group" class="form-control">
        </div>
        <div class="form-group">
            <label for="country">Country: </label>
            <input type="text" name="country" id="country" ng-model="country" class="form-control">
        </div>
        <button type="button" ng-click="submit()" class="btn btn-default">Login</button>
    </form>
</div>