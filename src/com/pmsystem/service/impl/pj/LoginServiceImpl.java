package com.pmsystem.service.impl.pj;

import com.pmsystem.dao.pj.LoginDAO;
import com.pmsystem.service.pj.LoginService;

public class LoginServiceImpl implements LoginService {

	private LoginDAO logindao;
	private String password = null;

	public String login(String userName) {
		System.out.println("Service_userName:" + userName);
		password = logindao.login(userName);
		System.out.println("Service_password:" + password);
		return password;
	}

	public String searchUser(String userName) {
		return logindao.searchUser(userName);
	}

	public LoginDAO getLogindao() {
		return logindao;
	}

	public void setLogindao(LoginDAO logindao) {
		this.logindao = logindao;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
