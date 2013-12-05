package com.pmsystem.model.pj;

import java.util.List;

public class TaskOfGannt {
	String id,
		   name,
		   code,
		   level,
		   status,
		   start,
		   duration,
		   end,
		   startIsMilestone,
		   endIsMilestone,
		   collapsed,
		   depends,
		   description;
	int progress;
	List <assigsOfGantt> assigs;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getStart() {
		return start;
	}
	public void setStart(String start) {
		this.start = start;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getEnd() {
		return end;
	}
	public void setEnd(String end) {
		this.end = end;
	}
	public String getStartIsMilestone() {
		return startIsMilestone;
	}
	public void setStartIsMilestone(String startIsMilestone) {
		this.startIsMilestone = startIsMilestone;
	}
	public String getEndIsMilestone() {
		return endIsMilestone;
	}
	public void setEndIsMilestone(String endIsMilestone) {
		this.endIsMilestone = endIsMilestone;
	}
	public String getCollapsed() {
		return collapsed;
	}
	public void setCollapsed(String collapsed) {
		this.collapsed = collapsed;
	}
	public String getDepends() {
		return depends;
	}
	public void setDepends(String depends) {
		this.depends = depends;
	}
	public List<assigsOfGantt> getAssigs() {
		return assigs;
	}
	public void setAssigs(List<assigsOfGantt> assigs) {
		this.assigs = assigs;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getProgress() {
		return progress;
	}
	public void setProgress(int progress) {
		this.progress = progress;
	}
	
}
