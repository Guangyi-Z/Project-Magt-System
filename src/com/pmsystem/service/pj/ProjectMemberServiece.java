package com.pmsystem.service.pj;

import java.util.List;

import com.pmsystem.model.pj.ProjectMember;

public interface ProjectMemberServiece {
	public String addMember(ProjectMember member);
	
	public String deleteMember(String proID, String memID);
	
	public String updateMember(ProjectMember member);
	
	public List<ProjectMember> getAllMembers(int limit, int start, String projectID);
	
	public int getCount();
}
