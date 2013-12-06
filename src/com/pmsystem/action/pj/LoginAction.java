package com.pmsystem.action.pj;

import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.service.pj.LoginService;

public class LoginAction extends ActionSupport {
	private LoginService loginService;
	private String userName = null;
	private String password = null;

	public String login() {
		System.out.println("Action:" + userName);
		if (userName.equals(loginService.searchUser(userName))) {
			if (password.equals(loginService.login(userName))) {
				System.out.println("success");
				return SUCCESS;
			} else {
				System.out.println("password_error");
				return "psdError";
			}
		} else {
			System.out.println("no_such_user");
			return "noSuchUser";
		}
	}

	public LoginService getLoginService() {
		return loginService;
	}

	public void setLoginService(LoginService loginService) {
		this.loginService = loginService;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
