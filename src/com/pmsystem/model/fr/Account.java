package com.pmsystem.model.fr;

import java.io.Serializable;

public class Account implements Serializable {
	
	 private String account_id;
	 private String account_password;
	 
	public String getAccount_id() {
		return account_id;
	}
	public void setAccount_id(String accountId) {
		account_id = accountId;
	}
	public String getAccount_password() {
		return account_password;
	}
	public void setAccount_password(String accountPassword) {
		account_password = accountPassword;
	}
	 
}
