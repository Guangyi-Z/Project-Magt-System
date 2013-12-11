package com.pmsystem.action.pj;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.model.pj.User;
import com.pmsystem.service.pj.LoginService;
import com.pmsystem.service.pj.RegisterService;

public class RegisterAction extends ActionSupport {
	private String userName;
	private String password;
	private String empID;
	private User user;

	private RegisterService registerService;

	public String register() {
		user = new User();
		user.setUserName(userName);
		user.setPassword(password);
		user.setEmpID(empID);
		System.out.println(userName);
		System.out.println(password);
		System.out.println(empID);
		if (!empID.equals(registerService.searchEmpIDFromUser(empID))) {
			if (empID.equals(registerService.searchEmpID(empID)))
				if (!(userName.equals(registerService.searchUser(userName)))) {
					registerService.register(user);
					ActionContext ctx = ActionContext.getContext();
					ctx.getSession().put("userID", empID);
					ctx.getSession().put("userName", userName);
					return SUCCESS;
				} else {
					return "userExist";
				}
			else {
				return "empIDNoExist";
			}
		} else {
			return "empIDIsUsed";
		}
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

	public RegisterService getRegisterService() {
		return registerService;
	}

	public void setRegisterService(RegisterService registerService) {
		this.registerService = registerService;
	}

	public String getEmpID() {
		return empID;
	}

	public void setEmpID(String empID) {
		this.empID = empID;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
