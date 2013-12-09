package com.pmsystem.action.pj;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletResponseAware;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.service.pj.LoginService;

public class LoginAction extends ActionSupport implements ServletResponseAware {
	private LoginService loginService;
	private String userName = null;
	private String password = null;
	private HttpServletResponse response;

	public String login() {
		
		if (userName.equals("admin")) {
			if (password.equals("admin"))
				return "admin";
			else
				return "psdError";
		}
		if (userName.equals(loginService.searchUser(userName))) {
			if (password.equals(loginService.login(userName))) {
				ActionContext ctx = ActionContext.getContext();
				ctx.getSession().put("userID", userName);
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

	public void setServletResponse(HttpServletResponse arg0) {
		// TODO Auto-generated method stub
		this.response = response;
	}

}
