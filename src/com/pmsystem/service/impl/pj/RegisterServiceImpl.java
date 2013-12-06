package com.pmsystem.service.impl.pj;

import com.pmsystem.dao.pj.RegisterDAO;
import com.pmsystem.model.pj.User;
import com.pmsystem.service.pj.RegisterService;

public class RegisterServiceImpl implements RegisterService {

	private RegisterDAO registerDao;

	public String register(User user) {
		registerDao.register(user);
		return null;
	}

	public String searchEmpID(String empID) {
		return registerDao.searchEmpID(empID);
	}

	public String searchUser(String userName) {
		return registerDao.searchUser(userName);
	}

	public String searchEmpIDFromUser(String empID) {
		return registerDao.searchEmpIDFromUser(empID);
		
	}

	public RegisterDAO getRegisterDao() {
		return registerDao;
	}

	public void setRegisterDao(RegisterDAO registerDao) {
		this.registerDao = registerDao;
	}
	
}
