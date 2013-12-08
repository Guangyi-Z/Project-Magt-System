package com.pmsystem.dao.pj;

import java.util.List;
import java.util.Map;

import com.pmsystem.model.pj.ProjectMember;

public interface ProjectMemberDAO {

	public String addMember(ProjectMember member);
	
	public String deleteMember(Map<String, String> map);
	
	public void updateMember(ProjectMember member);
	
	public int getCount();
	
	public List<ProjectMember> getAllMembers(Map<String, Object> map);
	
	//public ProjectMember getMemberByID(String proID, String memID);
}
