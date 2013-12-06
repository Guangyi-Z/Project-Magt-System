package com.pmsystem.model.fr;

import java.io.Serializable;

public class FProject implements Serializable{

	 private String project_id;
	 private String project_name;
	 
	public String getProject_id() {
		return project_id;
	}
	public void setProject_id(String projectId) {
		project_id = projectId;
	}
	public String getProject_name() {
		return project_name;
	}
	public void setProject_name(String projectName) {
		project_name = projectName;
	}
	  
}
